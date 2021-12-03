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
    padding: "8px 16px",
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

export default useStyles;
