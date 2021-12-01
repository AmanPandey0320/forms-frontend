import { createMuiTheme, makeStyles } from "@material-ui/core";

export const getMuiTheme = ({ color, bgColor }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: color,
        light: bgColor,
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });
  return theme;
};

export const formStyles = makeStyles((theme) => ({
  formContainer: {
    marginLeft: "16vw",
    width: "52vw",
    "@media screen and (max-width: 1200px)": {},
    "@media screen and (max-width: 800px)": {},
    "@media screen and (max-width: 500px)": {
      width: "95vw",
      padding: 0,
      margin: "auto",
    },
    "@media screen and (max-width: 360px)": {},
  },
  gridContainer: {
    marginTop: "8px",
    width: "52vw",
    "@media screen and (max-width: 1200px)": {},
    "@media screen and (max-width: 800px)": {},
    "@media screen and (max-width: 500px)": {
      width: "95vw",
      padding: 0,
      margin: "auto",
    },
    "@media screen and (max-width: 360px)": {},
  },
  gridItem: {
    marginTop: "8px",
    width: "52vw",
    "@media screen and (max-width: 1200px)": {},
    "@media screen and (max-width: 800px)": {},
    "@media screen and (max-width: 500px)": {
      width: "94.5vw",
      padding: 0,
      margin: "auto",
      marginTop: "4px",
    },
    "@media screen and (max-width: 360px)": {},
  },
}));

const useStyles = {
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
  tabs: {
    borderRadius: 0,
    flexGrow: 1,
  },
};

export default useStyles;
