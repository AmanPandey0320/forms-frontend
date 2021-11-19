import {
  Checkbox,
  FormControlLabel,
  TextField,
  FormControl,
} from "@material-ui/core";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { optionAction } from "../../../../lib/store/optionSlice";
import { saveOption } from "../../../../lib/thunks/option.thunk";
import { optionStyles } from "./styles";

const MultiMCQ = ({ id, ...props }) => {
  const option = useSelector((state) => state.option.data[id]);
  const dispatch = useDispatch();
  const classes = optionStyles();
  const isMounted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(saveOption(id));
    }, 1000);

    if (isMounted.current === false) {
      isMounted.current = true;
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [option]);

  /**
   *
   * @param {*} e
   */
  const handleCheckChange = (e) => {
    const value = e.target.checked;
    const SO = false;
    const prev = -1;
    dispatch(optionAction.editIsCorrect({ id, prev, SO, value }));
  };

  /**
   *
   * @param {*} e
   */
  const handleTitleChange = (e) => {
    const title = e.target.value;
    dispatch(optionAction.editTitle({ id, title }));
  };
  return (
    <>
      <FormControl fullWidth>
        <FormControlLabel
          control={
            <Checkbox
              checked={Boolean(option?.is_right)}
              onChange={handleCheckChange}
              color="primary"
            />
          }
          label={
            <TextField
              className={classes.textField}
              onChange={handleTitleChange}
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
