import { RowWrapper } from "./style";
import PropTypes from "prop-types";

/**
 * @description row for grid view
 * @param {*} param0
 * @returns
 */
const Row = ({ children, ...props }) => {
  return <RowWrapper {...props}>{children}</RowWrapper>;
};

Row.propTypes = {
  wrap: PropTypes.string,
  grow: PropTypes.number,
  shrink: PropTypes.number,
  reverse: PropTypes.bool,
  justifyContent: PropTypes.string.isRequired,
};

export default Row;
