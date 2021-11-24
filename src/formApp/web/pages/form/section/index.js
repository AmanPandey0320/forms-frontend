import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import useStyles from "./style";
import { useEffect, useRef, useState } from "react";
import { saveSection } from "../../../../lib/thunks/section.thunk";
import {
  descriptionTextChangeListner,
  descriptionTextChangeListner2,
  titleTextChangeListner,
} from "./logic";
import Question from "../question";
import { useMediaQuery } from "react-responsive";

/**
 * @description
 * @param {*} sid (mandetory)
 * @param {*} props
 * @returns
 */
const Section = ({ sid, ...props }) => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1000px)" });
  const [activeQue, setActiveQue] = useState(0);
  const classes = useStyles();
  const section = useSelector((state) => state.section.data[sid]);
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(saveSection(sid));
    }, 1000);
    if (isMounted.current === false) {
      clearTimeout(timer);
      isMounted.current = true;
    }
    return () => {
      clearTimeout(timer);
    };
  }, [section]);
  return (
    <>
      <Box>
        <Grid className={classes.gridContainer} container direction="column">
          <Grid className={classes.gridItem} item>
            <Grid
              container
              className={classes.gridContainer}
              direction="column"
            >
              <Grid item>
                <Grid container justify="flex-start" direction="row">
                  <Grid lg={2} item>
                    <Box className={classes.sectionHead}>Section</Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={classes.gridItem} item>
                <Paper className={classes.sectionHeading}>
                  <Grid
                    container
                    className={classes.gridContainer}
                    direction="column"
                  >
                    <Grid item>
                      <TextField
                        className={classes.gridTextField}
                        id={`section_title_id_${sid}`}
                        label="Title"
                        value={section?.title}
                        color="primary"
                        fullWidth
                        autoFocus={true}
                        onChange={titleTextChangeListner(sid)}
                      />
                    </Grid>
                    {isLargeScreen ? (
                      <>
                        <Grid item>
                          <Typography color="primary">
                            <small>Description</small>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <CKEditor
                            key={`section_description_id_${sid}`}
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
                            data={section?.description}
                            onChange={descriptionTextChangeListner(sid)}
                          />
                        </Grid>
                      </>
                    ) : (
                      <Grid item>
                        <TextField
                          id="form_description_txt"
                          label="Description"
                          className={classes.gridTextField}
                          value={section?.description}
                          color="primary"
                          error={true}
                          helperText="Please open in desktop for better view"
                          autoFocus={true}
                          onChange={descriptionTextChangeListner2(sid)}
                          fullWidth
                        />
                      </Grid>
                    )}
                  </Grid>
                </Paper>
              </Grid>
              <>
                {section.questions?.map((qid, idx) => (
                  <Grid key={qid} onClick={(e) => setActiveQue(idx)} item>
                    <Question qid={qid} active={idx === activeQue} idx={idx} />
                  </Grid>
                ))}
              </>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Section;
