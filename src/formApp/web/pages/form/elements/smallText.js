import React from "react";
import TextField from "@material-ui/core/TextField";
import { smallTextStyles } from "./styles";

const SmallText = ({ qid, ...props }) => {
  const classes = smallTextStyles();
  return (
    <TextField
      fullWidth
      variant='outlined'
      id={qid}
      className={classes.textField}
      placeholder="Your answer here"
    />
  );
};

export default SmallText;
