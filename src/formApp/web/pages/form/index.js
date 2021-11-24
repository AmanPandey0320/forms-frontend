import {
  Container,
  Grid,
  withStyles,
  Backdrop,
  Snackbar,
  CircularProgress,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import Sticky from "react-stickynode";
import Canvas from "../../shared/canvas";
import Navbar from "../../shared/navbar/formNavBar";
import Header from "./elements/header";
import headImg from "../../../assets/headers/H001.png";
import useStyles, { getMuiTheme, formStyles } from "./style";
import Heading from "./elements/heading";
import { http } from "../../../lib/utils/repository";
import { withToastManager } from "react-toast-notifications";
import store from "../../../lib/store/store";
import { Alert } from "@material-ui/lab";
import { mapStateToProps, saveFromToStore } from "./logic";
import { connect } from "react-redux";
import Section from "./section";
import Footer from "../../shared/footer";
import { ThemeProvider } from "@material-ui/core/styles";

const FormSfc = (props) => {
  const classes = formStyles();
  return (
    <Container className={classes.formContainer}>
      <Grid
        container
        className={classes.gridContainer}
        direction="column"
      >
        <Grid className={classes.gridItem} item>
          <Toolbar />
        </Grid>
        <Grid className={classes.gridItem} item>
          <Header bg={headImg} />
        </Grid>
        <Grid className={classes.gridItem} item>
          <Heading />
        </Grid>
        <>
          {props.sections?.map((sec) => (
            <Grid className={classes.gridItem} item key={sec} item>
              <Section sid={sec} />
            </Grid>
          ))}
        </>
        {/**
         * Footer here
         */}
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

/**
 *
 */
class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false, errMsg: "", loading: true, snackbar: false };
    this.fid = this.props.match.params.fid;
    this.classes = this.props.classes;
    this.dispatch = store.dispatch;
  }

  /**
   * @param {*} e
   */
  backDropClickListner(e) {
    this.setState({
      ...this.state,
      snackbar: false,
    });
  }
  /**
   *
   * @param {*} e
   */
  onCloseSnackBarEventListner(e) {
    this.setState({
      ...this.state,
      snackbar: false,
    });
  }
  /**
   * @lifecycle
   */
  componentDidMount() {
    http(`/api/form/populate-action?id=${this.fid}`, "GET")
      .then((res) => {
        const { data, err, messages } = res.data;
        console.log("form populate----->", data?.result);
        if (err?.length > 0) {
          err.forEach((e) => {
            this.toastManager(`${e.code} : ${e.message}`, {
              appearance: "error",
            });
          });
          return;
        }
        saveFromToStore(data?.result);
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
  /**
   * @render
   * @returns
   */
  render() {
    console.log("forms----->", this.props.form);
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
    /**
     *
     */
    return (
      <>
        <ThemeProvider theme={getMuiTheme(this.props?.form?.theme)}>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar bg="#ffffff" color="#262626" />
          </Sticky>
          <Canvas bg={this.props?.form?.theme?.bgColor}>
            <FormSfc sections={this.props.sections} />
          </Canvas>
        </ThemeProvider>
      </>
    );
  }
}

export default connect(mapStateToProps)(
  withStyles(useStyles)(withRouter(withToastManager(Forms)))
);
