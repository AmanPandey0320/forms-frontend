import React from "react";
import { withRouter } from "react-router";
import Sticky from "react-stickynode";
import Canvas from "../../shared/canvas";
import Navbar from "../../shared/navbar/formNavBar";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.fid = this.props.match.params.fid;
  }
  render() {
    return (
      <>
        <Canvas bg={"blue"}>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar bg="#ffffff" color="#262626" />
          </Sticky>
        </Canvas>
      </>
    );
  }
}

export default withRouter(Forms);
