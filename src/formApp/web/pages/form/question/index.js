import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import DatePicker from "../elements/date";
import FileUpload from "../elements/fileUpload";
import MultiMCQ from "../elements/multiMCQ";
import ParagraphText from "../elements/paraText";
import SingleMCQ from "../elements/singleMCQ";
import SmallText from "../elements/smallText";
import useStyles from "./style";

/**
 *
 * @param {*} param0
 * @returns
 */
const Question = ({ qid, idx, ...props }) => {
  const classes = useStyles();
  const question = useSelector((state) => state.question.data[qid]);
  return (
    <>
      <Box className={classes.container}>
        <Paper className={classes.root}>
          <Grid container direction="column">
            <Grid item>
              <Grid container justify="space-evenly" direction="row">
                <Grid item>{idx}.</Grid>
                <Grid xs={11} item>
                  <Grid container spacing={1} direction="column">
                    <Grid xs={11} item>
                      <TextField
                        fullWidth
                        value={question.title}
                        variant="outlined"
                        color="primary"
                      />
                    </Grid>
                    <Grid item>
                      <Grid container direction="row" justify="space-between">
                        <Grid xs={9} item>
                          {question.type === "ST" && <SmallText />}
                          {question.type === "PG" && <ParagraphText />}
                          {question.type === "SO" && (
                            <Grid container spacing={1} direction="column">
                              {" "}
                              {question.options?.map((op) => (
                                <Grid item key={op}>
                                  <SingleMCQ id={op} />
                                </Grid>
                              ))}{" "}
                            </Grid>
                          )}
                          {question.type === "MO" && (
                            <Grid container spacing={1} direction="column">
                              {" "}
                              {question.options?.map((op) => (
                                <Grid item key={op}>
                                  <MultiMCQ id={op} />
                                </Grid>
                              ))}{" "}
                            </Grid>
                          )}
                          {question.type === "DD" && <DatePicker />}
                          {question.type === "FU" && <FileUpload />}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Question;
