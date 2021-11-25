import { Grid, Box, Paper, Typography } from "@material-ui/core";
import DOMPurify from "dompurify";
import data from "../../../../assets/data/data";
import useStyles from "./styles";
import Question from "../question";

const Section = (props) => {
  const classes = useStyles();
  const html = DOMPurify.sanitize("<p>description:<ul><li>op1</li></ul></p>", {
    ALLOWED_ATTR: data.ALLOWED_ATTR,
    ALLOWED_TAGS: data.ALLOWED_TAGS,
  });
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Grid container direction="row">
            <Grid md={2} item>
              <Box className={classes.sectionHead}>Section</Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Paper className={classes.sectionHeading}>
            <Grid item>
              <Typography className={classes.SectionTitle} align="justify">
                Lorem ipsum dolor, sit ame
              </Typography>
            </Grid>
            <Grid item>
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </Grid>
          </Paper>
        </Grid>
        <>
          {
            // questions
            <Grid item>
              <Question />
            </Grid>
          }
        </>
      </Grid>
    </>
  );
};

export default Section;
