import { Grid, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { responseActions } from "../../../../lib/store/responseSlice";

/**
 *
 * @param {*} props
 * @returns
 */
const SmallText = ({ qid, ...props }) => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.response.data[qid]);

  /**
   *
   * @param {*} e
   */
  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(responseActions.edit({ qid, value, type: "ST" }));
  };

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <TextField
            value={response?.ans}
            onChange={handleChange}
            placeholder="Your response here"
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SmallText;
