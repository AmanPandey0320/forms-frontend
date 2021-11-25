import { Grid, TextField } from "@material-ui/core";

const SmallText = (props) => {
  return (
    <>
      <Grid container direction="column">
          <Grid item>
              <TextField placeholder="Your response here" fullWidth />
          </Grid>
      </Grid>
    </>
  );
};

export default SmallText;
