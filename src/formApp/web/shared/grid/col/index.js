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
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "initial",
    "inherit",
  ]),
};

export default Col;
