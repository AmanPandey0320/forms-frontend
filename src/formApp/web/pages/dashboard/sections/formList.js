import { Container, Grid, withStyles } from "@material-ui/core";
import React from "react";
import { SectionWrapper } from "../../../css/homeStyles";
import blankFormIcon from "../../../../assets/images/add.svg";
import { openForm } from "../logic";
import FormCard from "./form-card";
import AKAvatar from "../../../shared/avatar";
import { withRouter } from "react-router-dom";
import { http } from "../../../../lib/utils/repository";
import { withToastManager } from "react-toast-notifications";
import { formStyles } from "./styles";

class FormList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    http("/api/form/list-action", "GET")
      .then((res) => {
        const { data, err, messages } = res.data;
        console.log(data);
        if (err?.length > 0) {
          err.forEach((e) => {
            this.props.toastManager(`${e?.code} : ${e.message}`, {
              appearance: "error",
            });
          });
        }
        this.setState({
          ...this.state,
          data: data.result,
        });
      })
      .catch((error) => {})
      .finally(() => {});
  }

  render() {
    const { classes } = this.props;
    return (
      <SectionWrapper width="100%">
        <Container disableGutters className={this.props.classes.root}>
          <Grid spacing={1} container>
            {this.state.data.map((form, index) => {
              return (
                <FormCard
                  handler={openForm(
                    form.id,
                    this.props.history,
                    this.props.toast
                  )}
                  key={index}
                  data={form}
                />
              );
            })}
          </Grid>
        </Container>
      </SectionWrapper>
    );
  }
}

export default withStyles(formStyles)(withRouter(withToastManager(FormList)));
