import {
  Button,
  Grid,
  FormControlLabel,
  Fade,
  FormControl,
  FormLabel,
  Checkbox,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { responseActions } from "../../../../lib/store/responseSlice";

/**
 *
 * @param {*} param0
 * @returns
 */
const SingleMCQ = ({ qid, oids, ...props }) => {
  const option = useSelector((state) => state.option.data);
  const response = useSelector((state) => state.response.data[qid]);
  const dispatch = useDispatch();
  const [val, setVal] = useState(false);
  /**
   *
   * @param {*} oid
   * @returns
   */
  const optionChangeHandler = (oid) => (e) => {
    const value = e.target.checked;
    dispatch(responseActions.edit({ qid, oid, value, type: "MO" }));
  };
  /**
   *
   * @param {*} e
   */
  const clearForm = (e) => {
    dispatch(responseActions.clearOne({ qid, type: "MO" }));
  };
  /**
   *
   */
  useEffect(() => {
    let show = false;
    oids?.forEach((oid) => {
      show = show || Boolean(response?.ans[oid]);
    });
    setVal(show);
  }, [response]);
  /**
   *
   */
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <FormControl>
            <FormLabel component="legend">Options</FormLabel>
            {oids?.map((oid) => {
              // console.log("oid---->", oid, response?.ans[oid]);
              return (
                <FormControlLabel
                  key={oid}
                  label={option[oid]?.title}
                  value={`${option[oid]?.id}`}
                  control={
                    <Checkbox
                      checked={Boolean(response?.ans[oid])}
                      onChange={optionChangeHandler(oid)}
                      size="small"
                      color="primary"
                    />
                  }
                />
              );
            })}
          </FormControl>
        </Grid>
        <Fade in={val}>
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
