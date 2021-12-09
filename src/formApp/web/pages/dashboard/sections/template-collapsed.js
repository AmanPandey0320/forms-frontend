import {
  Container,
  Grid,
  Backdrop,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import { SectionWrapper } from "../../../css/homeStyles";
import blankFormIcon from "../../../../assets/images/add.svg";
import { createFromTemplate, createNewFormCall, openForm } from "../logic";
import { withRouter } from "react-router-dom";
import FormCard from "./form-card";
import AKAvatar from "../../../shared/avatar";

class Collapsed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, snackbar: false };
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
   *
   * @param {*} e
   */
  createNewForm = (e) => {
    console.log("clicked");
    this.setState({ ...this.state, loading: true });
    createNewFormCall()
      .then((result) => {
        const { id } = result;
        if (Boolean(id)) {
          this.props.history.push(`/form-app/form/${id}?tab=form`);
        } else {
          this.setState({ ...this.state, loading: false });
          this.props.toast("Some error occured", {
            appearance: "error",
          });
        }
      })
      .catch((err) => {
        this.setState({ ...this.state, loading: false });
        this.props.toast("Some error occured", {
          appearance: "error",
        });
      });
  };
  render() {
    console.log(this.props);
    const { classes, data } = this.props;
    /**
     * backdrop
     */
    if (this.state.loading) {
      return (
        <Backdrop
          onClick={this.backDropClickListner}
          className={classes.backdrop}
          open={this.state.loading}
        >
          <CircularProgress color="primary" />
          <Snackbar
            open={this.state.snackbar}
            autoHideDuration={3000}
            onClose={this.onCloseSnackBarEventListner}
          >
            <Alert onClose={this.onCloseSnackBarEventListner} severity="info">
              Please wait while we create new form!
            </Alert>
          </Snackbar>
        </Backdrop>
      );
    }
    /**
     *
     */
    return (
      <SectionWrapper width="100%">
        <Container className={classes.cRoot}>
          <Grid spacing={1} container>
            <Grid className={classes.cItem} xs={4} lg={2} sm={3} item>
              <AKAvatar
                onClick={this.createNewForm}
                variant="square"
                src={blankFormIcon}
                alt="new form"
                size={132}
              />
            </Grid>
            {data.slice(0, 5).map((template, index) => {
              return (
                <FormCard
                  key={index}
                  handler={createFromTemplate(
                    template.template_id,
                    this.props.history,
                    this.props.toast
                  )}
                  data={template}
                />
              );
            })}
          </Grid>
        </Container>
      </SectionWrapper>
    );
  }
}

export default withRouter(Collapsed);
