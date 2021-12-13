import { Grid, Box, Paper, Typography } from "@material-ui/core";
import DOMPurify from "dompurify";
import data from "../../../../assets/data/data";
import useStyles from "./styles";
import Question from "../question";
import { useSelector } from "react-redux";

const Section = ({ sid, len, curr, ...props }) => {
  const classes = useStyles();
  const section = useSelector((state) => state.section.data[sid]);
  const html = DOMPurify.sanitize(section.description, {
    ALLOWED_ATTR: data.ALLOWED_ATTR,
    ALLOWED_TAGS: data.ALLOWED_TAGS,
  });
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Grid container direction="row">
            <Grid md={2} item>
              <Box className={classes.sectionHead}>
                Section {curr} of {len}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Paper className={classes.sectionHeading}>
            <Grid item>
              <Typography className={classes.SectionTitle} align="justify">
                {section.title}
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
            section.questions?.map((que, idx) => (
              <Grid key={que} item>
                <Question idx={idx} qid={que} />
              </Grid>
            ))
          }
        </>
      </Grid>
    </>
  );
};

export default Section;
