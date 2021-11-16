import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionHead: {
    width: "min-content",
    backgroundColor: theme.palette.primary.main,
    padding: "8px",
    paddingInline: "16px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    color: theme.palette.common.white,
  },
  sectionHeading: {
    borderTopLeftRadius: "0px",
    padding: "8px",
    paddingInline: "16px",
  },
  textField: {
    width: "100%",
  },
  //style for font size
  resize: {
    marginBottom: "2px",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
  },
}));

export default useStyles;
