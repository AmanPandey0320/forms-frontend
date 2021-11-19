import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Select,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { InputTypes } from "../../../../assets/data/form";
import DatePicker from "../elements/date";
import FileUpload from "../elements/fileUpload";
import MultiMCQ from "../elements/multiMCQ";
import ParagraphText from "../elements/paraText";
import QuestionUtilities from "../utility/question.utilty";
import SingleMCQ from "../elements/singleMCQ";
import SmallText from "../elements/smallText";
import {
  requiredBtnClickHandler,
  titleTextChangeListner,
  typeChangeHandler,
} from "./logic";
import useStyles from "./style";
import { useEffect, useRef } from "react";
import { saveQuestion } from "../../../../lib/thunks/question.thunk";

/**
 *
 * @param {*} param0
 * @returns
 */
const Question = ({ qid, idx, active, ...props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const question = useSelector((state) => state.question.data[qid]);
  /**
   *
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(saveQuestion(qid));
    }, 1000);
    if (isMounted.current === false) {
      clearTimeout(timer);
      isMounted.current = true;
    }
    return () => {
      clearTimeout(timer);
    };
  }, [question]);
  /**
   *
   */
  return (
    <>
      <Box className={classes.container}>
        <Grid container direction="column">
          <Grid item>
            <Paper className={classes.root}>
              <Grid container direction="column">
                <Grid item>
                  <Grid container justify="space-evenly" direction="row">
                    <Grid item>{idx + 1}.</Grid>
                    <Grid xs={11} item>
                      <Grid container spacing={1} direction="column">
                        <Grid item>
                          <Grid
                            container
                            spacing={1}
                            justify="space-between"
                            direction="row"
                          >
                            <Grid xs={9} item>
                              <TextField
                                fullWidth
                                onChange={titleTextChangeListner(question.id)}
                                value={question.title ? question.title : ""}
                                variant="filled"
                                color="primary"
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <FormControl variant="outlined" fullWidth>
                                <Select
                                  onChange={typeChangeHandler(
                                    question.id,
                                    "type"
                                  )}
                                  variant="outlined"
                                  value={question.type}
                                >
                                  {InputTypes.map((ip) => {
                                    return (
                                      <MenuItem key={ip.id} value={ip.value}>
                                        {ip.text}
                                      </MenuItem>
                                    );
                                  })}
                                </Select>
                              </FormControl>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid
                            container
                            direction="row"
                            justify="space-between"
                          >
                            <Grid xs={8} item>
                              {question.type === "ST" && <SmallText />}
                              {question.type === "PG" && <ParagraphText />}
                              {question.type === "SO" && (
                                <SingleMCQ
                                  qid={question.id}
                                  oids={question.options}
                                />
                              )}
                              {question.type === "MO" && (
                                <Grid container spacing={1} direction="column">
                                  {" "}
                                  {question.options?.map((op) => (
                                    <Grid item key={op}>
                                      <MultiMCQ
                                        oids={question.options}
                                        id={op}
                                      />
                                    </Grid>
                                  ))}{" "}
                                </Grid>
                              )}
                              {question.type === "DD" && <DatePicker />}
                              {question.type === "FU" && <FileUpload />}
                            </Grid>
                            <Grid xs={3} item>
                              <Grid container direction="column">
                                <Grid item>
                                  <Grid
                                    container
                                    justify="flex-end"
                                    direction="row"
                                  >
                                    <Grid item>
                                      <FormControlLabel
                                        control={
                                          <Switch
                                            onChange={requiredBtnClickHandler(
                                              question.id
                                            )}
                                            checked={Boolean(question.required)}
                                            color="primary"
                                          />
                                        }
                                        label={
                                          <Typography>required</Typography>
                                        }
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {active && (
            <Grid item>
              <QuestionUtilities data={question} />
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default Question;
