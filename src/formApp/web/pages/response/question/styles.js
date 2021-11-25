import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "4px",
    padding: "8px",
    [theme.breakpoints.down("xs")]: {},
    [theme.breakpoints.between("xs", "sm")]: {},
    [theme.breakpoints.between("sm", "md")]: {},
    [theme.breakpoints.between("md", "lg")]: {},
    [theme.breakpoints.between("lg", "xl")]: {
      marginTop: "4px",
      padding: "16px",
    },
    [theme.breakpoints.up("xl")]: {},
  },
}));

export default useStyles;
