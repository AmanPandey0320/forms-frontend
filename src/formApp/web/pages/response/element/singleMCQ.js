import {
  Button,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Fade,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import { useState } from "react";

const SingleMCQ = (props) => {
  const [val, setVal] = useState(-1);
  const optionChangeHandler = (e) => {
    setVal(e.target.value);
  };
  const clearForm = (e) => {
    setVal(-1);
  };
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <FormControl>
            <FormLabel component="legend">Options</FormLabel>
            <RadioGroup value={val} onChange={optionChangeHandler}>
              <FormControlLabel
                label="option1"
                value="1"
                control={<Radio size="small" color="primary" />}
              />
              <FormControlLabel
                label="option2"
                value="2"
                control={<Radio size="small" color="primary" />}
              />
              <FormControlLabel
                label="option3"
                value="3"
                control={<Radio size="small" color="primary" />}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Fade in={val !== -1}>
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
