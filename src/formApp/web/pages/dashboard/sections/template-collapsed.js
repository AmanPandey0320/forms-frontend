import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { SectionWrapper } from "../../../css/homeStyles";
import blankFormIcon from "../../../../assets/images/add.svg";
import { createFromTemplate } from "../logic";
import { withRouter } from "react-router-dom";
import FormCard from "./form-card";
import AKAvatar from "../../../shared/avatar";

class Collapsed extends React.Component {
  render() {
    console.log(this.props);
    const { classes, data } = this.props;
    return (
      <SectionWrapper width="100%">
        <Container className={classes.cRoot}>
          <Grid spacing={1} container>
            <Grid className={classes.cItem} xs={4} lg={2} sm={3} item>
              <AKAvatar
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
