import { Paper, Box, Grid, IconButton } from "@material-ui/core";
import { Tooltip } from "@mui/material";
import { useRef, useState } from "react";
import {
  MdAddCircleOutline,
  MdSplitscreen,
  MdOutlineAddBox,
  MdDelete,
  MdOutlineUploadFile,
  MdDeleteSweep,
} from "react-icons/md";
import { AiOutlineFileSync } from "react-icons/ai";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import {
  addNewQuestion,
  addNewOption,
  inactiveQuestion,
  uploader,
  openFile,
  removeFile,
  addNewSection,
} from "./question.logic";
import { useToasts } from "react-toast-notifications";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const QuestionUtilities = ({ data, idx, sec, ...props }) => {
  const fileRef = useRef();
  const toast = useToasts();
  const params = useParams();
  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(false);
  const [cSection, setCsection] = useState(false);

  /**METHODS */

  /**
   * @description handle file upload;
   * @param {*} e
   */
  const handleUpload = (e) => {
    const file = e.target.files[0];
    setUploading(true);
    let answer = { name: file.name, type: file.type };
    setFile(answer);
    uploader(file, data?.id)
      .then((res) => {
        toast.addToast("File uploaded", {
          appearance: "success",
        });
      })
      .catch((err) => {
        toast.addToast(err?.message ? err.message : "Some error occured", {
          appearance: "error",
        });
      })
      .finally(() => {
        setUploading(false);
      });
  };

  /**
   *
   * @param {*} e
   */
  const newSectionHandler = (e) => {
    setCsection(true);
    addNewSection(params.fid)
      .then((res) => {
        setCsection(false);
        toast.addToast("Section created", { appearance: "success" });
      })
      .catch((err) => {
        setCsection(false);
        toast.addToast("Some error occured!", { appearance: "error" });
      });
  };

  /**VIEW */
  return (
    <>
      <input
        hidden
        ref={fileRef}
        type="file"
        name="file"
        onChange={handleUpload}
      />
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
                  <IconButton onClick={newSectionHandler} color="primary">
                    <MdSplitscreen />
                  </IconButton>
                </Tooltip>
              </Grid>
            )}
            {Boolean(data?.attachment?.length) === false ? (
              <Grid item>
                <Tooltip placement="bottom" title="Add file">
                  <IconButton
                    disabled={uploading}
                    onClick={(e) => fileRef.current.click()}
                    color="primary"
                  >
                    <MdOutlineUploadFile />
                  </IconButton>
                </Tooltip>
              </Grid>
            ) : (
              <>
                <Grid item>
                  <Tooltip placement="bottom" title="Replace file">
                    <IconButton
                      disabled={uploading}
                      onClick={(e) => fileRef.current.click()}
                      color="primary"
                    >
                      <AiOutlineFileSync />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip placement="bottom" title="Open uploaded file">
                    <IconButton
                      disabled={uploading}
                      onClick={openFile(data.attachment, true)}
                      color="primary"
                    >
                      <BsFillFileEarmarkArrowDownFill />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip placement="bottom" title="Remove file">
                    <IconButton
                      disabled={uploading}
                      onClick={removeFile(data?.id)}
                      color="primary"
                    >
                      <MdDeleteSweep />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </>
            )}
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
