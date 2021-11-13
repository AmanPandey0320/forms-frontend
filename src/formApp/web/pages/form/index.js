import { Container, Grid, withStyles } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import Sticky from "react-stickynode";
import Canvas from "../../shared/canvas";
import Navbar from "../../shared/navbar/formNavBar";
import Header from "./elements/header";
import headImg from "../../../assets/headers/H001.png";
import useStyles from "./style";
import Heading from "./elements/heading";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.fid = this.props.match.params.fid;
    this.classes = this.props.classes;
  }
  render() {
    return (
      <>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <Navbar bg="#ffffff" color="#262626" />
        </Sticky>
        <Canvas bg={"blue"}>
          <Container className={this.classes.formContainer}>
            <Grid container spacing={1} direction="column">
              <Grid item>
                <Header bg={headImg} />
              </Grid>
              <Grid item>
                <Heading />
              </Grid>
            </Grid>
          </Container>
        </Canvas>
      </>
    );
  }
}

export default withStyles(useStyles)(withRouter(Forms));
