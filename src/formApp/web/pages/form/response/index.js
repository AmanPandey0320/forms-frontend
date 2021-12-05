import {
  Container,
  Grid,
  Backdrop,
  Snackbar,
  CircularProgress,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Menu,
  MenuItem,
  Icon,
} from "@material-ui/core";
import { AccountCircleTwoTone } from "@material-ui/icons";
import { HiDotsHorizontal } from "react-icons/hi";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllResponse } from "./logic";
import { useDispatch, useSelector } from "react-redux";
import { responseActions } from "../../../../lib/store/responseSlice";
import useStyles from "./style";
import ResponseView from "./responseView";
import { MdOutlineShare } from "react-icons/md";

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
  const [currRes, setCurrRes] = useState(0);
  const [anchorE1, setAnchorE1] = useState(null);

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
  /**
   *
   * @param {*} e
   */
  const onCloseSnackBarEventListner = (e) => {
    setSnackbar(false);
  };
  /**
   *
   * @param {*} e
   */
  const backDropClickListner = (e) => {
    setSnackbar(true);
  };
  /**
   *
   * @param {*} e
   */
  const openListMenu = (e) => {
    setAnchorE1(e.currentTarget);
  };
  /**
   *
   * @param {*} e
   */
  const onCloseListMenu = (e) => {
    setAnchorE1(null);
  };
  /**
   *
   * @param {*} idx
   * @returns
   */
  const listItemOnClickListener = (idx) => (e) => {
    setCurrRes(idx);
  };

  /** LOGS */
  console.log("all forms ------>", allResponse, sentForm, allUid);

  /** VIEWS */

  /**
   * Loading
   */
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

  /**
   * error
   */
  if (error) {
    return (
      <Container>
        <Grid container spacing={1} direction="column">
          {msg.map((e, idx) => (
            <Grid key={idx} item>
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

  /**
   * no response view
   */
  if (allUid?.length === 0) {
    return (
      <Container>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Alert severity="info">
              <AlertTitle>Error</AlertTitle>
              No response recieved — <strong>Click on </strong>
              <IconButton color="primary">
                <MdOutlineShare />{" "}
              </IconButton>
              <strong> to share form</strong>
            </Alert>
          </Grid>
        </Grid>
      </Container>
    );
  }

  /**
   * main view
   */
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Container>
            <Grid container direction="column">
              <Grid item>
                <Grid container spacing={1} direction="row">
                  <Grid md={8} item>
                    {allUid[currRes]?.id && (
                      <ResponseView rid={allUid[currRes]?.id} />
                    )}
                  </Grid>
                  <Grid md={4} item>
                    <Grid container direction="column">
                      <Grid item>
                        <Paper className={classes.emailDropDownDiv}>
                          <Grid container direction="column">
                            <Grid item>
                              <Typography color="primary">
                                Respondees
                              </Typography>
                            </Grid>
                            <Grid item>
                              <List>
                                {allUid?.map((uid, idx) => (
                                  <ListItem
                                    button
                                    className={classes.emailDropDownListItem}
                                    key={uid.id}
                                    onClick={listItemOnClickListener(idx)}
                                  >
                                    {" "}
                                    <ListItemAvatar>
                                      <AccountCircleTwoTone color="primary" />
                                    </ListItemAvatar>{" "}
                                    <ListItemText
                                      primary={uid?.name}
                                      secondary={uid?.email}
                                    />
                                    <ListItemSecondaryAction>
                                      <IconButton
                                        onClick={openListMenu}
                                        color="primary"
                                      >
                                        <HiDotsHorizontal />
                                      </IconButton>
                                    </ListItemSecondaryAction>
                                  </ListItem>
                                ))}
                              </List>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
      <Menu
        id="menu-list-action"
        open={Boolean(anchorE1)}
        keepMounted
        anchorEl={anchorE1}
        onClose={onCloseListMenu}
      >
        <MenuItem>Delete</MenuItem>
        <MenuItem>Download</MenuItem>
      </Menu>
    </>
  );
};

export default Response;
