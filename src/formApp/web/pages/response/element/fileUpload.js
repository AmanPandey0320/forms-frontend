import { Button, CircularProgress, FormControl, Grid } from "@material-ui/core";
import { BsFilePlus } from "react-icons/bs";
import React from "react";
import { fileStyles } from "./styles";
import { mimeTypeIcon } from "./logic";
import { http } from "../../../../lib/utils/repository";
import { useToasts } from "react-toast-notifications";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { responseActions } from "../../../../lib/store/responseSlice";

const FileUpload = ({ qid, ...props }) => {
  const classes = fileStyles();
  const fileRef = React.useRef();
  const [file, setFile] = React.useState(null);
  const toast = useToasts();
  const dispatch = useDispatch();
  const response = useSelector((state) => state.response.data[qid]);
  const [uploading, setUploading] = React.useState(false);

  /**
   *
   * @param {*} e
   */
  const handleUpload = (e) => {
    const file = e.target.files[0];
    setUploading(true);
    let body = new FormData();
    let answer = { name: file.name, type: file.type };
    setFile(answer);
    body.append("file", file);
    /**
     * sending http request
     */
    http("/api/storage/upload", "POST", body)
      .then((res) => {
        console.log("response file upload res------>", res);
        const { code, message } = res.data;
        if (code === 200) {
          answer.sname = message;
          toast.addToast("File uploaded", {
            appearance: "success",
          });
          dispatch(responseActions.edit({ qid, value: answer, type: "FU" }));
        } else {
          toast.addToast("Some error occured!", {
            appearance: "error",
          });
        }
      })
      .catch((err) => {
        console.log("response file upload err ------>", err);
      })
      .finally(() => {
        setUploading(false);
      });
  };

  /**
   *
   */
  useEffect(() => {
    setFile(response.ans);
  }, [response]);
  return (
    <FormControl fullWidth className={classes.formControl}>
      <input
        hidden
        ref={fileRef}
        type="file"
        name="file"
        onChange={handleUpload}
      />
      <Grid container direction="column">
        {file && (
          <Grid item>
            <Grid container direction="row" spacing={1}>
              <Grid className={classes.icon} item>
                {mimeTypeIcon(file.type, file.name)}
              </Grid>
              <Grid className={classes.text} item>
                {file.name}
              </Grid>
              {uploading && (
                <Grid className={classes.progress} item>
                  <CircularProgress color="primary" size="small" />
                </Grid>
              )}
            </Grid>
          </Grid>
        )}
        <Grid md={4} xs={8} item>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => fileRef.current.click()}
          >
            <BsFilePlus />
            &nbsp;
            {!file && <span>Select file</span>}
            {file && <span>Change file</span>}
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default FileUpload;
