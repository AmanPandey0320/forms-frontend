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

/**
 *
 */
export const smallTextStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
  textField: {
    width: "100%",
  },
}));

export const optionStyles = makeStyles((theme) => ({
  textField: {
    width: "512px",
  },
}));

export const fileStyles = makeStyles((theme) => ({
  formControl: {
    width:"100%",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  iconWrapper: {
    marginBottom: theme.spacing(2),
    width: "100%",
    float: "left",
    paddingInline: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    width: "5%",
    verticalAlign: "middle",
  },
  text: {
    width: "90%",
    fontSize: "small",
  },
  switch: {
    maxWidth: "22%",
    marginLeft: theme.spacing(2),
    float: "right",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
      marginLeft: 0,
      marginTop: theme.spacing(1),
    },
  },
}));

export default useStyles;
