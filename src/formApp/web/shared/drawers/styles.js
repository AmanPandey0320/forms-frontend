import { makeStyles } from "@material-ui/core";

export const formDrawerStyles = makeStyles((theme) => ({
  drawer: {
    width: "320px",
    overflowX:"hidden"
  },
  listItem:{
      padding:0,
      marginTop:2
  },
  image:{
      borderRadius:"4px",
  }
}));
