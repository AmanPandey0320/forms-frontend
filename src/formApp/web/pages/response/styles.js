import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "8px",
      width: "100vw",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100vw",
    },
    [theme.breakpoints.between("sm", "md")]: {
      paddingTop: "8px",
      width: "72vw",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: "55vw",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      marginTop: "8px",
      width: "55vw",
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "8px",
      width: "55vw",
    },
  },
}));

export default useStyles;
