import {
  Divider,
  Grid,
  Icon,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { FaUserCircle } from "react-icons/fa";
import {
  MdDelete,
  MdDownload,
  MdAccessTimeFilled,
  MdOutlineAlternateEmail,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { formatDate } from "../../../../lib/utils/dateFormater";
import { resViewStyles } from "./style";

const ResponseView = ({ rid, ...props }) => {
  const classes = resViewStyles();
  const response = useSelector((state) => state.response.allResponse[rid]);
  const form = useSelector((state) => state.response.sentForm[rid]);

  console.log("response view log ------->", response, form);
  return (
    <>
      <Grid direction="column" spacing={1} container>
        <Grid item>
          <Paper className={classes.paper}>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <Grid container direction="row" justify="space-between">
                  <Grid item>
                    <Grid container spacing={1} direction="row">
                      <Grid item>
                        <Icon color="primary">
                          <FaUserCircle size="2em" />
                        </Icon>
                      </Grid>
                      <Grid item>
                        <Typography className={classes.font1}>
                          {response?.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row">
                      <Grid item>
                        <Tooltip title="Download">
                          <IconButton color="primary">
                            <MdDownload />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Grid item>
                        <Tooltip title="Delete">
                          <IconButton color="primary">
                            <MdDelete />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Divider />
              </Grid>
              <Grid item>
                <Grid container justify="space-between" direction="row">
                  <Grid item>
                    <Grid container spacing={1} direction="row">
                      <Grid item>
                        <Icon color="primary">
                          <MdOutlineAlternateEmail />
                        </Icon>
                      </Grid>
                      <Grid item>
                        <Typography className={classes.font2}>
                          {response?.email}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={1} direction="row">
                      <Grid item>
                        <Icon color="primary">
                          <MdAccessTimeFilled />
                        </Icon>
                      </Grid>
                      <Grid item>
                        <Typography className={classes.font2}>
                          {formatDate(response?.time).fullDate}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
              
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ResponseView;
