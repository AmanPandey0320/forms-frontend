import {
  Container,
  Grid,
  Backdrop,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllResponse } from "./logic";
import { useDispatch, useSelector } from "react-redux";
import { responseActions } from "../../../../lib/store/responseSlice";
import useStyles from "./style";

/**
 *
 * @param {*} props
 * @returns
 */
const Response = (props) => {
  /**VARIABLES */
  const classes = useStyles();
  const dispatch = useDispatch();
  const { allResponse, sentForm, allUid } = useSelector(
    (state) => state.response
  );
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState([]);
  const [snackbar, setSnackbar] = useState(false);

  /** EFFECTS */
  useEffect(() => {
    setLoading(true);
    fetchAllResponse(params.fid)
      .then((res) => {
        const { response, sentForm, allUid } = res;
        dispatch(responseActions.saveResponse({ response, sentForm, allUid }));
      })
      .catch((err) => {
        setError(true);
        setMsg(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  /** METHODS */
  const onCloseSnackBarEventListner = (e) => {
    setSnackbar(false);
  };
  const backDropClickListner = (e) => {
    setSnackbar(true);
  };

  /** LOGS */
  console.log("all forms ------>", allResponse, sentForm, allUid);

  /** VIEWS */

  if (loading) {
    return (
      <Backdrop
        onClick={backDropClickListner}
        className={classes.backdrop}
        open={loading}
      >
        <CircularProgress color="primary" />
        <Snackbar
          open={snackbar}
          autoHideDuration={3000}
          onClose={onCloseSnackBarEventListner}
        >
          <Alert onClose={onCloseSnackBarEventListner} severity="info">
            Please wait while we load the form!
          </Alert>
        </Snackbar>
      </Backdrop>
    );
  }

  if (error) {
    return (
      <Container>
        <Grid container spacing={1} direction="column">
          {msg.map((e) => (
            <Grid item>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {e.message} — <strong>check it out!</strong>
              </Alert>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
  return (
    <Grid container direction="column">
      <Grid item>
        <Container>response</Container>
      </Grid>
    </Grid>
  );
};

export default Response;
