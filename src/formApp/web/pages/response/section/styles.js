import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionHead: {
    width: "max-content",
    backgroundColor: theme.palette.primary.main,
    padding: "8px",
    paddingInline: "16px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    color: theme.palette.common.white,
  },
  sectionHeading: {
    borderTopLeftRadius: "0px",
    padding: "8px",
    [theme.breakpoints.down("xs")]: {},
    [theme.breakpoints.between("xs", "sm")]: {},
    [theme.breakpoints.between("sm", "md")]: {},
    [theme.breakpoints.between("md", "lg")]: {},
    [theme.breakpoints.between("lg", "xl")]: {
      padding: "8px",
    },
    [theme.breakpoints.up("xl")]: {},
  },
  SectionTitle: {
    [theme.breakpoints.down("xs")]: {},
    [theme.breakpoints.between("xs", "sm")]: {
        fontSize:"18px"
    },
    [theme.breakpoints.between("sm", "md")]: {},
    [theme.breakpoints.between("md", "lg")]: {},
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize:"32px"
    },
    [theme.breakpoints.up("xl")]: {
    },
  },
}));

export default useStyles;
