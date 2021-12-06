import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { smallTextStyles } from "./styles";

const ParagraphText = ({ qid, isRes, val, ...props }) => {
  const classes = smallTextStyles();
  if (Boolean(isRes)) {
    return (
      <TextField
        fullWidth
        disabled
        multiline
        rows={3}
        id={qid}
        value={val?.ans ? val?.ans : ""}
        className={classes.textField}
        placeholder="Your answer here"
      />
    );
  }
  return (
    <TextField
      id={qid}
      disabled
      multiline
      rows={3}
      className={classes.textField}
      placeholder="Your answer here"
    />
  );
};

export default ParagraphText;
