import {
  Grid,
  Paper,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import useStyles from "./styles";
import FileUpload from "../element/fileUpload";
import SmallText from "../element/smallText";
import ParaText from "../element/paraText";
import SingleMCQ from "../element/singleMCQ";
import MultiMCQ from "../element/multiMCQ";
import DateForm from "../element/date";
import { useDispatch, useSelector } from "react-redux";
import { responseActions } from "../../../../lib/store/responseSlice";
import { useEffect } from "react";
import { MdAttachFile } from "react-icons/md";
import { openAttachment } from "./logic";

const Question = ({ qid, idx, ...props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question.data[qid]);
  const response = useSelector((state) => state.response.data[qid]);
  useEffect(() => {
    if (Boolean(response) === false) {
      dispatch(
        responseActions.init({
          qid,
          require: question.required,
          type: question.type,
        })
      );
    }
  }, []);
  console.log("response----->", qid, response);
  return (
    <>
      {response && (
        <Grid container direction="column">
          <Grid item>
            <Paper className={classes.paper}>
              <Grid container spacing={1} direction="column">
                <Grid item>
                  <Grid container justify="space-between" direction="row">
                    <Grid xs={11} item>
                      <Typography align="justify">
                        {idx + 1}.
                        {Boolean(question.required) && (
                          <sup style={{ color: "red" }}>*</sup>
                        )}
                        &nbsp;
                        {question.title}
                      </Typography>
                    </Grid>
                    {question?.attachment?.length && (
                      <Grid item>
                        <Tooltip title="View attachment">
                          <IconButton
                            onClick={openAttachment(question?.attachment, true)}
                            color="primary"
                            size="small"
                          >
                            <MdAttachFile />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
                <Grid item>
                  {question.type === "ST" && <SmallText qid={qid} />}
                  {question.type === "PG" && <ParaText qid={qid} />}
                  {question.type === "SO" && (
                    <SingleMCQ qid={qid} oids={question.options} />
                  )}
                  {question.type === "MO" && (
                    <MultiMCQ qid={qid} oids={question.options} />
                  )}
                  {question.type === "FU" && <FileUpload qid={qid} />}
                  {question.type === "DD" && <DateForm qid={qid} />}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Question;
