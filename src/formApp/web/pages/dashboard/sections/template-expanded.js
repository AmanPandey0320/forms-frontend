import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { SectionWrapper } from "../../../css/homeStyles";
import blankFormIcon from "../../../../assets/images/add.svg";
import FormCard from "./form-card";
import AKAvatar from "../../../shared/avatar";

class Expanded extends React.Component {
  render() {
    const { classes, data } = this.props;
    return (
      <SectionWrapper width="100%">
        <Container className={classes.cRoot}>
          <Grid spacing={1} container>
            <Grid className={classes.cItem} xs={4} lg={2} sm={3} item>
              <AKAvatar variant="square" src={blankFormIcon} alt="new form" width={132} />
            </Grid>
            {data.map((template, index) => {
              return <FormCard key={index} data={template} />;
            })}
          </Grid>
        </Container>
      </SectionWrapper>
    );
  }
}

export default Expanded;
