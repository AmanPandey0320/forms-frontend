import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionHead: {
    width: "min-content",
    backgroundColor: theme.palette.primary.main,
    padding: "8px",
    paddingInline: "16px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    color: theme.palette.common.white,
  },
  gridContainer: {
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
  gridItem: {
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
  gridTextField: {
    "@media screen and (max-width: 1200px)": {},
    "@media screen and (max-width: 800px)": {},
    "@media screen and (max-width: 500px)": {
      width: "87vw",
    },
    "@media screen and (max-width: 360px)": {},
  },
  sectionHeading: {
    borderTopLeftRadius: "0px",
    padding: "8px",
    paddingInline: "16px",
  },
  textField: {
    width: "100%",
  },
  //style for font size
  resize: {
    marginBottom: "2px",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
  },
}));

export default useStyles;
