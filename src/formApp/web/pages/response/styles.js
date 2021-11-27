import { createMuiTheme, makeStyles } from "@material-ui/core";

export const getMuiTheme = ({ color, bgColor }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: color,
        light: bgColor,
      },
    },
  });
  return theme;
};

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

/**
 *
 */
export const useStyleWithClass = {
  resize: {
    width: "50vw",
    "@media screen and (max-width: 1200px)": {},
    "@media screen and (max-width: 800px)": {},
    "@media screen and (max-width: 500px)": {
      maxWidth: "95vw",
    },
    "@media screen and (max-width: 360px)": {},
  },
  backdrop: {
    zIndex: 4,
    color: "#fff",
  },
};

export default useStyles;
