import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { smallTextStyles } from "./styles";

const ParagraphText = ({ qid, ...props }) => {
  const classes = smallTextStyles();
  return (
    <TextField
      id={qid}
      variant="outlined"
      multiline
      rows={3}
      className={classes.textField}
      placeholder="Your answer here"
    />
  );
};

export default ParagraphText;
