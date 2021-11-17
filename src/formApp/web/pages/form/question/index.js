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
import { useSelector } from "react-redux";
import { InputTypes } from "../../../../assets/data/form";
import DatePicker from "../elements/date";
import FileUpload from "../elements/fileUpload";
import MultiMCQ from "../elements/multiMCQ";
import ParagraphText from "../elements/paraText";
import SingleMCQ from "../elements/singleMCQ";
import SmallText from "../elements/smallText";
import {
  requiredBtnClickHandler,
  titleTextChangeListner,
  typeChangeHandler,
} from "./logic";
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
                    <Grid item>
                      <Grid
                        container
                        spacing={1}
                        justify="space-between"
                        direction="row"
                      >
                        <Grid xs={10} item>
                          <TextField
                            fullWidth
                            onChange={titleTextChangeListner(question.id)}
                            value={question.title}
                            variant="filled"
                            color="primary"
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <FormControl variant="outlined" fullWidth>
                            <Select
                              onChange={typeChangeHandler(question.id, "type")}
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
                                        checked={question.required}
                                        color="primary"
                                      />
                                    }
                                    label={<Typography>required</Typography>}
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
      </Box>
    </>
  );
};

export default Question;
