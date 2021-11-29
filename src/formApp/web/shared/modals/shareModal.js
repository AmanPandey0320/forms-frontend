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
import { MdOutlineShare, MdCancel, MdContentCopy } from "react-icons/md";
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
const ShareModal = (props) => {
  const { open, setOpen, title, link } = props;
  const url = `${window.location.origin}${link}`;
  const toast = useToasts();
  const classes = useStyles();
  const handleClose = (e) => {
    setOpen(false);
  };
  const copyOnClick = (e) => {
    navigator.clipboard.writeText(url);
    setOpen(false);
    toast.addToast("Link copied", {
      appearance: "info",
    });
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
                <Grid container justify="space-between" direction="row">
                  <Grid xs={11} item>
                    <Grid container direction="row">
                      <Grid xs={1} item>
                        <Icon color="primary">
                          <MdOutlineShare size="1.2em" />
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
                    <Grid item>
                      To share please copy the link (this is a public link
                      anybody with this link will be able to respond this
                      survey)
                    </Grid>
                    <Grid item>
                      <Grid container justify="space-between" direction="row">
                        <Grid xs={11} item>
                          <TextField
                            fullWidth
                            variant="outlined"
                            value={`${url}`}
                          />
                        </Grid>
                        <Grid xs={1} item>
                          <Tooltip placement="right" title="Copy link">
                            <IconButton onClick={copyOnClick} color="primary">
                              <MdContentCopy />
                            </IconButton>
                          </Tooltip>
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

export default ShareModal;
