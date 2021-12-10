import { Paper, Box, Grid, IconButton } from "@material-ui/core";
import { Tooltip } from "@mui/material";
import {
  MdAddCircleOutline,
  MdSplitscreen,
  MdImage,
  MdVideoLibrary,
  MdOutlineAddBox,
  MdDelete,
  MdDeleteSweep,
  MdOutlineUploadFile,
} from "react-icons/md";
import {
  addNewQuestion,
  addNewOption,
  inactiveQuestion,
} from "./question.logic";

const QuestionUtilities = ({ data, idx, sec, ...props }) => {
  return (
    <>
      <Box style={{ marginTop: "4px", marginBottom: "36px" }}>
        <Paper>
          <Grid container justify="space-evenly" direction="row">
            {(data?.type === "SO" || data?.type === "MO") && (
              <Grid item>
                <Tooltip placement="bottom" title="Add Option">
                  <IconButton
                    onClick={addNewOption(data?.id, data?.sid, data?.fid)}
                    color="primary"
                  >
                    <MdOutlineAddBox />
                  </IconButton>
                </Tooltip>
              </Grid>
            )}
            <Grid item>
              <Tooltip placement="bottom" title="Add question">
                <IconButton
                  onClick={addNewQuestion(data.sid, data.fid, data.order, idx)}
                  color="primary"
                >
                  <MdAddCircleOutline />
                </IconButton>
              </Tooltip>
            </Grid>
            {sec && (
              <Grid item>
                <Tooltip placement="bottom" title="Add Section">
                  <IconButton color="primary">
                    <MdSplitscreen />
                  </IconButton>
                </Tooltip>
              </Grid>
            )}
            <Grid item>
              <Tooltip placement="bottom" title="Add file">
                <IconButton color="primary">
                  <MdOutlineUploadFile />
                </IconButton>
              </Tooltip>
            </Grid>
            {/* <Grid item>
              <Tooltip placement="bottom" title="Delete section">
                <IconButton color="primary">
                  <MdDeleteSweep />
                </IconButton>
              </Tooltip>
            </Grid>*/}
            <Grid item>
              <Tooltip placement="bottom" title="Delete question">
                <IconButton
                  onClick={inactiveQuestion(data?.id)}
                  color="primary"
                >
                  <MdDelete />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default QuestionUtilities;
