import { Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Element from "../element/fileUpload";

const Question = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Paper className={classes.paper}>
            <Grid container spacing={1} direction="column">
              <Grid item>
                <Typography align="justify">
                  1.<sup style={{ color: "red" }}>*</sup>&nbsp;Question
                </Typography>
              </Grid>
              <Grid item>
                <Element />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Question;
