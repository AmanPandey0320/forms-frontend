import { fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "16px",
    paddingInline: "0px",
    "&.inactive": {
      padding: 8,
    },
  },
  container: {
    marginTop: "4px",
    "&.active": {
      backgroungColor: theme.palette.background.paper,
    },
    "&.inactive": {
      backgroungColor: fade(theme.palette.common.black, 0.2),
    },
  },
  typeFormControl: {
    width: "",
  },
  typography: {
    "&.inactive": {
      color: "red",
      paddingTop: "4px",
    },
  },
}));

export default useStyles;
