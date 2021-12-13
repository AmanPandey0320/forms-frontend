import {
  Container,
  Grid,
  Toolbar,
  Backdrop,
  Snackbar,
  CircularProgress,
  withStyles,
  Button,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Sticky from "react-stickynode";
import Canvas from "../../shared/canvas";
import Navbar from "../../shared/navbar/formNavBar";
import Header from "./element/header";
import useStyles, { useStyleWithClass, getMuiTheme } from "./styles";
import Heading from "./element/heading";
import Section from "./section";
import Footer from "../../shared/footer";
import { Component } from "react";
import {
  mapStateToProps,
  saveFromToStore,
  saveResponseToState,
  submitForm,
} from "./logic";
import { connect, useSelector } from "react-redux";
import { useToasts, withToastManager } from "react-toast-notifications";
import { withRouter } from "react-router";
import { http } from "../../../lib/utils/repository";
import { ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";

const Responder = (props) => {
  const classes = useStyles();
  const form = useSelector((state) => state.form.data);
  const toast = useToasts();
  const [submitting, setSubmitting] = useState(false);
  // console.log("form in view------>", form);
  const handleSubmit = (e) => {
    submitForm(form.id, toast.addToast, setSubmitting);
  };
  return (
    <>
      <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
        <Navbar bg="#ffffff" color="#262626" response={true} />
      </Sticky>
      <Canvas bg={form.theme?.bgColor}>
        <Container className={classes.formContainer}>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <Toolbar />
            </Grid>
            <Grid item>
              <Header data={form.theme.header} />
            </Grid>
            <Grid item>
              <Heading t={form.title} d={form.description} />
            </Grid>
            {form.sections?.map((sec, idx) => {
              return (
                <Grid key={sec.id} item>
                  <Section
                    len={form.sections?.length}
                    curr={idx + 1}
                    sid={sec.id}
                  />
                </Grid>
              );
            })}
            <Grid item>
              <Grid container spacing={1} direction="row">
                <Grid item>
                  <Button
                    disabled={submitting}
                    color="primary"
                    onClick={handleSubmit}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </Canvas>
    </>
  );
};

class Response extends Component {
  constructor(props) {
    super(props);
    this.fid = this.props.match.params.fid;
    this.classes = this.props.classes;
    this.state = {
      loading: true,
      error: false,
      message: [],
      snackbar: false,
    };
  }
  /**
   * @param {*} e
   */
  backDropClickListner = (e) => {
    this.setState({
      ...this.state,
      snackbar: true,
    });
  };
  /**
   *
   * @param {*} e
   */
  onCloseSnackBarEventListner = (e) => {
    this.setState({
      ...this.state,
      snackbar: false,
    });
  };

  componentDidMount() {
    http(`/api/form/in-view-populate-action?fid=${this.fid}`)
      .then((res) => {
        const { data, err, messages } = res.data;
        console.log("form in view populate----->", data?.result?.form);
        if (err?.length > 0) {
          err.forEach((e) => {
            this.toastManager(`${e.code} : ${e.message}`, {
              appearance: "error",
            });
          });
          return;
        }
        if (Boolean(data?.result?.form)) {
          saveFromToStore(data?.result?.form);
        }
        if (Boolean(data?.result?.response)) {
          saveResponseToState(data?.result?.response);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({
          ...this.state,
          loading: false,
        });
      });
  }

  render() {
    /**
     *
     */
    if (this.state.loading) {
      return (
        <Backdrop
          onClick={this.backDropClickListner}
          className={this.classes.backdrop}
          open={this.state.loading}
        >
          <CircularProgress color="primary" />
          <Snackbar
            open={this.state.snackbar}
            autoHideDuration={3000}
            onClose={this.onCloseSnackBarEventListner}
          >
            <Alert onClose={this.onCloseSnackBarEventListner} severity="info">
              Please wait while we load the form!
            </Alert>
          </Snackbar>
        </Backdrop>
      );
    }
    return (
      <>
        <ThemeProvider theme={getMuiTheme(this.props?.form?.theme)}>
          <Responder />
        </ThemeProvider>
      </>
    );
  }
}

export default connect(mapStateToProps)(
  withStyles(useStyleWithClass)(withRouter(withToastManager(Response)))
);
