import { FormControlLabel, Radio, TextField } from "@material-ui/core";
import { useSelector } from "react-redux";
import { optionStyles } from "./styles";

const SingleMCQ = ({ id, ...props }) => {
  const option = useSelector((state) => state.option.data[id]);
  const classes = optionStyles();
  return (
    <>
      <FormControlLabel
        control={<Radio color="primary" />}
        label={
          <TextField
            className={classes.textField}
            variant="outlined"
            value={option?.title}
          />
        }
      />
    </>
  );
};

export default SingleMCQ;
