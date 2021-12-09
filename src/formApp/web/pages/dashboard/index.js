import React, { useState } from "react";
import useStyles from "../../mUIstyles/dashboard";
import { Fade } from "react-reveal";
import Navbar from "../../shared/navbar/home-nav";
import Sticky from "react-stickynode";
import { Template } from "./sections/template-hoc";
import CollapsedTemplate from "./sections/template-collapsed";
import Expanded from "./sections/template-expanded";
import { Heading1, TopDiv } from "../../css/dashBoard";
import { LightGlowButton } from "../../shared/buttons/MUIbuttons";
import { TiArrowUnsorted } from "react-icons/ti";
import { HiTemplate } from "react-icons/hi";
import { SiFormstack } from "react-icons/si";
import FormList from "./sections/formList";
import { Grid } from "@material-ui/core";

const Dashboard = (props) => {
  const classes = useStyles();
  const [fade, setFade] = useState(false);
  const clickHandler = () => {
    setFade(!fade);
  };
  return (
    <div className={classes.root}>
      <Sticky top={0} innerZ={9} activeClass="sticky-nav-active">
        <Navbar bg="#ffffff" color="#000000" />
      </Sticky>
      <TopDiv>
        <Heading1 space="8px">
          <HiTemplate color="#0080ff" size="1.5em" />
          &nbsp;&nbsp;Templates
        </Heading1>
        <LightGlowButton clickHandler={clickHandler}>
          Templates&nbsp;
          <TiArrowUnsorted />
        </LightGlowButton>
      </TopDiv>
      {!fade && Template(CollapsedTemplate, "Aman")}
      {fade && Template(Expanded, "Aman")}
      <br />
      <Fade duration={500} bottom when={!fade}>
        <div>
          <TopDiv>
            <Grid container direction="column">
              <Grid item>
                <Heading1 space="8px">
                  <SiFormstack color="#0080ff" size="1.5em" />
                  &nbsp;&nbsp;Your Forms
                </Heading1>
              </Grid>
              <Grid item>
                <FormList />
              </Grid>
            </Grid>
          </TopDiv>
        </div>
      </Fade>
    </div>
  );
};

export default Dashboard;
