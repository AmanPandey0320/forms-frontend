import React from "react";
import PropTypes from "prop-types";
import { Span } from "./style";

/**
 * @class
 * @component
 * @description for text
 */
class Text extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { component, children, ...props } = this.props;
    switch (component) {
      case "span":
        return <Span {...props}>{children}</Span>;

      default:
        return <Span {...props}>{children}</Span>;
    }
  }
}

Text.propTypes = {
  size: PropTypes.string,
  bold: PropTypes.bool,
  font: PropTypes.string,
};

export default Text;
