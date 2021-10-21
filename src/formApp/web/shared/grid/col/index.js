import { ColWrapper } from "./style";
import PropTypes from "prop-types";

/**
 * @description column for grid view
 * @param {*} param0
 * @returns
 */
const Col = ({ children, ...props }) => {
  return <ColWrapper {...props}>{children}</ColWrapper>;
};

Col.propTypes = {
  wrap: PropTypes.string,
  grow: PropTypes.number,
  shrink: PropTypes.number,
  reverse: PropTypes.bool,
  size: PropTypes.number,
  justifyContent: PropTypes.string.isRequired,
};

export default Col;
