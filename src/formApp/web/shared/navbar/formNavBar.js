import Brand from "../brand";
import { MdSettings, MdOutlineShare } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { AppBar, Grid, IconButton, Toolbar, Tooltip } from "@material-ui/core";
import { navbarStyles } from "./style";
import { useState } from "react";
import ShareModal from "../modals/shareModal";
import { useParams } from "react-router";

const FormNavBar = ({ color, ...props }) => {
  const classes = navbarStyles();
  const [share, setShare] = useState(false);
  const params = useParams();
  const openShareModal = (e) => {
    setShare(true);
  };
  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Grid container direction="row">
                <Grid item>
                  <Brand />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row-reverse">
                <Grid item>
                  <IconButton color="primary">
                    <FaUserCircle />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Tooltip title="Setting">
                    <IconButton color="primary">
                      <MdSettings />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="Share">
                    <IconButton onClick={openShareModal} color="primary">
                      <MdOutlineShare />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <ShareModal
        title="Share this survey"
        link={`/form-app/response/submit/${params.fid}`}
        open={share}
        setOpen={setShare}
      />
    </>
  );
};

export default FormNavBar;
