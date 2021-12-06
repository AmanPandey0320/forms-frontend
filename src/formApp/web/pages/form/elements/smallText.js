import React from "react";
import TextField from "@material-ui/core/TextField";
import { smallTextStyles } from "./styles";

const SmallText = ({ qid, isRes, val, ...props }) => {
  const classes = smallTextStyles();
  if (Boolean(isRes)) {
    return (
      <TextField
        fullWidth
        disabled
        id={qid}
        value={val?.ans ? val?.ans : ""}
        className={classes.textField}
        placeholder="Your answer here"
      />
    );
  }
  return (
    <TextField
      fullWidth
      disabled
      id={qid}
      className={classes.textField}
      placeholder="Your answer here"
    />
  );
};

export default SmallText;
