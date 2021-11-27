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
import { useSelector, useDispatch } from "react-redux";
import { responseActions } from "../../../../lib/store/responseSlice";

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const SingleMCQ = ({ qid, oids, ...props }) => {
  const dispatch = useDispatch();
  const option = useSelector((state) => state.option.data);
  const response = useSelector((state) => state.response.data[qid]);

  /**
   *
   * @param {*} e
   */
  const optionChangeHandler = (e) => {
    const value = e.target.value;
    dispatch(responseActions.edit({ qid, value: +value, type: "SO" }));
  };
  /**
   *
   * @param {*} e
   */
  const clearForm = (e) => {
    dispatch(responseActions.clearOne({qid,type:"SO"}))
  };
  /**
   * 
   */
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <FormControl>
            <FormLabel component="legend">Options</FormLabel>
            <RadioGroup
              value={`${response?.ans}`}
              onChange={optionChangeHandler}
            >
              {oids?.map((oid) => (
                <FormControlLabel
                  key={oid}
                  label={option[oid]?.title}
                  value={`${option[oid]?.id}`}
                  control={<Radio size="small" color="primary" />}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Fade in={Boolean(response.ans)}>
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
