import React from "react";
import {
  CircularLogo,
  RectangularAvatar,
  SquareAvatar,
  TextAvatar,
} from "./style";
import PropTypes from "prop-types";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  titleEncoder() {
    if (this.props?.title === undefined || this.props?.title?.length === 0) {
      return "";
    } else if (typeof this.props.title !== "string") {
      return "";
    }
    const arr = this.props.title.split(" ");
    let ans = "";
    arr.forEach((e) => {
      if (e && e.length > 0 && ans.length <= 3) {
        ans = ans + e[0].toUpperCase();
      }
    });

    return ans;
  }

  render() {
    const { variant, ...props } = this.props;
    switch (variant) {
      case "circle":
        return <CircularLogo {...props} />;
      case "rectangle":
        return <RectangularAvatar {...props} />;
      case "square":
        return <SquareAvatar {...props} />;
      case "text":
        return <TextAvatar {...props}>{this.titleEncoder()}</TextAvatar>;
      default:
        return <CircularLogo {...props} />;
    }
  }
}

Avatar.propTypes = {
  variant: PropTypes.oneOf(["circle", "rectangle", "square", "text"]),
  radius: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  size: PropTypes.number,
  title: PropTypes.string,
  src: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Avatar;
