import { Paper, Box, Grid, IconButton } from "@material-ui/core";
import { Tooltip } from "@mui/material";
import {
  MdAddCircleOutline,
  MdSplitscreen,
  MdImage,
  MdVideoLibrary,
} from "react-icons/md";
import { addNewQuestion } from "./question.logic";

const QuestionUtilities = ({ data, ...props }) => {
  return (
    <>
      <Box style={{ marginTop: "4px", marginBottom: "36px" }}>
        <Paper>
          <Grid container justify="space-evenly" direction="row">
            <Grid item>
              <Tooltip placement="bottom" title="Add question">
                <IconButton
                  onClick={addNewQuestion(data.sid, data.fid, data.order)}
                  color="primary"
                >
                  <MdAddCircleOutline />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip placement="bottom" title="Add Section">
                <IconButton color="primary">
                  <MdSplitscreen />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip placement="bottom" title="Add Section">
                <IconButton color="primary">
                  <MdVideoLibrary />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip placement="bottom" title="Add Section">
                <IconButton color="primary">
                  <MdImage />
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
