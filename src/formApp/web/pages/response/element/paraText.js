import { Grid, TextField } from "@material-ui/core";

const ParaText = (props) => {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <TextField
            placeholder="Your response here"
            multiline
            rows={3}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ParaText;
