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
  const onCloseSnackBarEventListner = (e) => {
    setSnackbar(false);
  };
  const backDropClickListner = (e) => {
    setSnackbar(true);
  };
  const openListMenu = (e) => {
    setAnchorE1(e.currentTarget);
  };
  const onCloseListMenu = (e) => {
    setAnchorE1(null);
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sit illo illum adipisci sapiente mollitia saepe quae nobis,
                    distinctio voluptatum magni natus iste earum quas, nemo
                    suscipit itaque delectus excepturi quia hic ipsum. Nobis
                    neque aut, possimus debitis non enim! Consequatur dolor
                    dolorum ratione impedit reiciendis corporis fugiat libero
                    numquam temporibus quidem ab, mollitia maiores! Tempora
                    repudiandae cum, quod accusantium ducimus, amet nesciunt quo
                    voluptates ipsam rerum animi? Quasi velit alias libero
                    molestiae iure et reprehenderit totam. Tempora sequi placeat
                    dignissimos facere rem minima enim ullam obcaecati
                    recusandae accusantium. Aut omnis corrupti eligendi labore
                    fugit nobis tenetur, accusamus adipisci recusandae aperiam.
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
                                    className={classes.emailDropDownListItem}
                                    key={uid.id}
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
