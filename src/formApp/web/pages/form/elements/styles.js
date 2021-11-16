import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "8px",
    paddingInline: "16px",
  },
  textField: {
    width: "100%",
  },
  //style for font size
  resize: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 36,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 48,
    },
  },
}));

export default useStyles;
