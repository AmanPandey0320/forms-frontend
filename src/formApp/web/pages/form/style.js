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
  },
  backdrop: {
    zIndex: 4,
    color: "#fff",
  },
};

export default useStyles;
