import Brand from "../brand";
import { MdSettings, MdOutlineShare, MdGrading } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import {
  AppBar,
  Grid,
  IconButton,
  Paper,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
} from "@material-ui/core";
import { navbarStyles } from "./style";
import { useEffect, useState } from "react";
import ShareModal from "../modals/shareModal";
import { useHistory, useLocation, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { utilActions } from "../../../lib/store/utilitySlice";

const FormNavBar = ({ color, response, ...props }) => {
  const classes = navbarStyles();
  const [share, setShare] = useState(false);
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const query = new URLSearchParams(location.search);
  const openShareModal = (e) => {
    setShare(true);
  };
  /**
   *
   */
  const handleTabChange = (e, n) => {
    history.push(`/form-app/form/${params.fid}?tab=${n}`);
  };
  useEffect(() => {
    if (!response) {
      dispatch(utilActions.setFormTab({ tab: query.get("tab") }));
    }
  }, [query.get("tab")]);
  /**
   *
   */
  return (
    <>
      <AppBar color="secondary" className={classes.root}>
        <Grid container direction="column">
          <Grid item>
            <Toolbar>
              <Grid container direction="row" justify="space-between">
                <Grid item>
                  <Grid container direction="row">
                    <Grid item>
                      <Brand />
                    </Grid>
                  </Grid>
                </Grid>
                {!response && (
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
                )}
              </Grid>
            </Toolbar>
          </Grid>
          {!response && (
            <Grid item>
              <div>
                <Tabs
                  onChange={handleTabChange}
                  value={query.get("tab")}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab value="form" label="form" />
                  <Tab value="response" label="responses" />
                </Tabs>
              </div>
            </Grid>
          )}
        </Grid>
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
