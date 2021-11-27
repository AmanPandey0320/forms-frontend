import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import data from "../../../../assets/data/data";
import { headingStyles } from "./styles";
import DOMPurify from "dompurify";

/**
 *
 * @param {*} props
 * @returns
 */
const Heading = (props) => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1000px)" });
  const classes = headingStyles();
  const html = DOMPurify.sanitize(props.d, {
    ALLOWED_ATTR: data.ALLOWED_ATTR,
    ALLOWED_TAGS: data.ALLOWED_TAGS,
  });
  return (
    <Box>
      <Paper className={classes.paper}>
        <Grid container direction="column">
          <Grid item>
            <Typography className={classes.title} align="justify">
              {props.t}
            </Typography>
          </Grid>
          <Grid item>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Heading;
