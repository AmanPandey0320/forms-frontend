import {
  Checkbox,
  FormControlLabel,
  TextField,
  FormControl,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { optionStyles } from "./styles";

const MultiMCQ = ({ id, ...props }) => {
  const option = useSelector((state) => state.option.data[id]);
  const classes = optionStyles();
  return (
    <>
      <FormControl fullWidth>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label={
            <TextField
              className={classes.textField}
              variant="outlined"
              fullWidth
              value={option?.title}
            />
          }
        />
      </FormControl>
    </>
  );
};

export default MultiMCQ;
