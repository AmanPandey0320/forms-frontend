import {
  Button,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Fade,
  FormControl,
  FormLabel,
  Checkbox,
} from "@material-ui/core";
import { useState } from "react";

const SingleMCQ = (props) => {
  const [val, setVal] = useState({ 0: true });
  const optionChangeHandler = (e) => {
    setVal((prev) => {
      let data = { ...prev, 0: false };
      data[e.target.value] = e.target.checked;
      return data;
    });
  };
  const clearForm = (e) => {
    setVal({ 0: true });
  };
  console.log(val);
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <FormControl>
            <FormLabel component="legend">Options</FormLabel>
            <FormControlLabel
              label="option1"
              value="1"
              control={
                <Checkbox
                  checked={val["1"]}
                  onChange={optionChangeHandler}
                  size="small"
                  color="primary"
                />
              }
            />
            <FormControlLabel
              label="option2"
              value="2"
              control={
                <Checkbox
                  checked={val["2"]}
                  onChange={optionChangeHandler}
                  size="small"
                  color="primary"
                />
              }
            />
            <FormControlLabel
              label="option3"
              value="3"
              control={
                <Checkbox
                  checked={val["3"]}
                  onChange={optionChangeHandler}
                  size="small"
                  color="primary"
                />
              }
            />
          </FormControl>
        </Grid>
        <Fade in={!val[0]}>
          <Grid item>
            <Button onClick={clearForm} variant="text" color="primary">
              Clear
            </Button>
          </Grid>
        </Fade>
      </Grid>
    </>
  );
};

export default SingleMCQ;
