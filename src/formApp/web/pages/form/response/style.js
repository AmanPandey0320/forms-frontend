import { makeStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles";

/**
 * material styles
 */
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 4,
    color: "#fff",
  },
  emailDropDownDiv: {
    padding: "8px",
  },
  emailDropDown: {},
  emailDropDownListItem: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "2px 2px 4px 0px grey",
    borderRadius: "4px",
    marginBottom: 3,
    color: theme.palette.common.black,
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 0.05),
    },
  },
}));

export const resViewStyles = makeStyles((theme) => ({
  paper: {
    padding: "8px 16px",
  },
  icon1: {
    width: "32px",
  },
  font1: {
    fontSize: "32px",
    color: theme.palette.primary.main,
  },
  font2: {
    fontSize: "16px",
    color: "#606060",
  },
}));

export default useStyles;
