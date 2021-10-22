import React from "react";
import { CircularLogo } from "./style";
import PropTypes from "prop-types";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { variant, radius, src } = this.props;
    switch (variant) {
      case "circle":
        return <CircularLogo src={src} radius={radius} />;

      default:
        return <CircularLogo src={src} radius={radius} />;
    }
  }
}

Avatar.propTypes = {
  variant: PropTypes.oneOf(["circle"]),
  radius: PropTypes.number,
  src: PropTypes.object,
};

export default Avatar;
