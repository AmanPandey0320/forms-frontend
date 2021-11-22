import { createMuiTheme } from "@material-ui/core";

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
const useStyles = {
  formContainer: {
    marginTop: "8px",
    width: "50vw",
    "@media screen and (max-width: 1200px)": {},
    "@media screen and (max-width: 800px)": {},
    "@media screen and (max-width: 500px)": {
      width: "95vw",
      padding: 0,
      margin: "auto",
    },
    "@media screen and (max-width: 360px)": {},
  },
  resize:{
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
