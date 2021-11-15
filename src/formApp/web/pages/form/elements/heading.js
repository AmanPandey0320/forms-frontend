import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../../../../lib/store/formSlice";
import { useEffect, useRef } from "react";
import { saveForm } from "../../../../lib/thunks/form.thunk";

/**
 *
 * @param {*} props
 * @returns
 */
const Heading = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const { title, ...rest } = useSelector(
    (state) => state.form.data
  );
  console.log(rest);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(saveForm());
    }, 1000);
    if (isMounted.current === false) {
      isMounted.current = true;
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [title, rest.description]);

  const handleTitleChange = (e) => {
    const title = e.target.value;
    dispatch(formActions.editTitle({ title }));
  };

  const handleDescriptionChange = (e, editor) => {
    const description = editor.getData();
    dispatch(formActions.editDescription({ description }));
  };
  return (
    <Box>
      <Paper className={classes.container}>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <TextField
              id="form_title_txt"
              label="Title"
              value={title}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              color="primary"
              className={classes.textField}
              autoFocus={true}
              onChange={handleTitleChange}
            />
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography color="primary">
                  <small>Description</small>
                </Typography>
              </Grid>
              <Grid item>
                <CKEditor
                  key="form_description_id"
                  editor={ClassicEditor}
                  onReady={(editor) => {
                    editor?.editing.view.change((writer) => {
                      writer.setStyle(
                        "height",
                        "100px",
                        editor?.editing.view.document.getRoot()
                      );
                      writer.setStyle(
                        "padding-inline",
                        "16px",
                        editor?.editing.view.document.getRoot()
                      );
                    });
                  }}
                  data={rest.description}
                  onChange={handleDescriptionChange}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Heading;
