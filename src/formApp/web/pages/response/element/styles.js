import { makeStyles } from "@material-ui/core";

export const headingStyles = makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.down("xs")]: {},
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "8px",
    },
    [theme.breakpoints.between("sm", "md")]: {},
    [theme.breakpoints.between("md", "lg")]: {},
    [theme.breakpoints.between("lg", "xl")]: {
      padding: "16px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "16px",
    },
  },
  title: {
    [theme.breakpoints.down("xs")]: {},
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.between("sm", "md")]: {},
    [theme.breakpoints.between("md", "lg")]: {},
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: "48px",
    },
    [theme.breakpoints.up("xl")]: {},
  },
}));

export const headerStyle = makeStyles((theme) => ({
  div: {
    borderRadius: "10px",
    [theme.breakpoints.down("xs")]: {},
    [theme.breakpoints.between("xs", "sm")]: {},
    [theme.breakpoints.between("sm", "md")]: {},
    [theme.breakpoints.between("md", "lg")]: {
      height: "22vh",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      height: "20vh",
    },
    [theme.breakpoints.up("xl")]: {
      height: "20vh",
    },
  },
}));

export const fileStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
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
    maxWidth: "90%",
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
  progress: {
    width: "24px",
  },
}));
