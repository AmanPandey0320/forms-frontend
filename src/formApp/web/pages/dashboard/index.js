import React, { useEffect, useState } from "react";
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

const Dashboard = (props) => {
  const classes = useStyles();
  const [fade, setFade] = useState(false);
  const clickHandler = () => {
    setFade(!fade);
  };
  return (
    <div className={classes.root}>
      <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
        <Navbar bg="#ffffff" color="#000000" />
      </Sticky>
      <TopDiv>
        <Heading1>
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
            <Heading1>
              <SiFormstack color="#0080ff" size="1.5em" />
              &nbsp;&nbsp;Your Forms
            </Heading1>
          </TopDiv>
        </div>
      </Fade>
    </div>
  );
};

export default Dashboard;