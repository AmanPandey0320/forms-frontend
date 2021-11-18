import { Button, FormControl, Grid } from "@material-ui/core";
import { BsFilePlus } from "react-icons/bs";
import React from "react";
import { fileStyles } from "./styles";
import { mimeTypeIcon } from "./logic";

const FileUpload = (props) => {
  const classes = fileStyles();
  const fileRef = React.useRef();
  const [file, setFile] = React.useState(null);
  return (
    <FormControl fullWidth className={classes.formControl}>
      <input
        hidden
        ref={fileRef}
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files[0])}
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
            </Grid>
          </Grid>
        )}
        <Grid xs={4} item>
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
