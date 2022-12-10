import Portal from "../portal";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  Button,
  Container,
  Grid,
  Icon,
  IconButton,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { MdCancel, MdContentCopy, MdDelete } from "react-icons/md";
import { useToasts } from "react-toast-notifications";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "512px",
    padding: "16px",
  },
  container: {
    paddingTop: "16px",
  },
}));

/**
 *
 * @param {*} props
 * @returns
 */
const DeleteModel = (props) => {
  const { open, setOpen, title, link } = props;
  const url = `${window.location.origin}${link}`;
  const toast = useToasts();
  const classes = useStyles();
  const handleClose = (e) => {
    setOpen(false);
  };
  const onYesClickHandler = (e) => {
    setOpen(false);
    toast.addToast("Deleted", {
      appearance: "success",
      autoDismiss: true,
    });
  };
  const onKeepClickHandler = (e) => {
    setOpen(false);
  };
  return (
    <Portal eid="portal-root">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <Grid container direction="column">
              <Grid item>
                <Grid
                  container
                  justify="space-between"
                  alignItems="center"
                  direction="row"
                >
                  <Grid xs={11} item>
                    <Grid container direction="row">
                      <Grid xs={1} item>
                        <Icon color="primary">
                          <MdDelete size="1.2em" />
                        </Icon>
                      </Grid>
                      <Grid xs={11} item>
                        <Typography component="h5" variant="h5">
                          {title}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={1} item>
                    <IconButton onClick={handleClose}>
                      <MdCancel size="0.75em" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Container className={classes.container}>
                  <Grid container spacing={2} direction="column">
                    <Grid item>Are you sure you want to delete this?</Grid>
                    <Grid item>
                      <Grid
                        container
                        spacing={1}
                        justify="flex-end"
                        direction="row"
                      >
                        <Grid item>
                          <Button onClick={onYesClickHandler} variant="text">
                            Yes, Delete
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            onClick={onKeepClickHandler}
                            variant="text"
                            color="primary"
                          >
                            No, Keep it
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Modal>
    </Portal>
  );
};

export default DeleteModel;
