import Grid from "../grid";
import Avatar from "../avatar/index";
import Text from "../text";
import logo from "../../../assets/images/logo3.svg";

const Brand = (props) => {
  return (
    <>
      <Grid.grid>
        <Grid.row justifyContent="initial">
          <Grid.col xl={1} lg={2} md={1} sm={1} xs={2} justifyContent="initial">
            <Avatar variant="circle" src={logo} radius={48} />
          </Grid.col>
          <Grid.col xl={4} lg={4} md={4} sm={3} xs={4} justifyContent="initial">
            <Grid.row justifyContent="initial">
              <Text size="26" font="Permanent Marker" component="span">
                Forms
              </Text>
            </Grid.row>
            <Grid.row justifyContent="initial">
              <Text variant="span" size="12">
                Create.Send.Analyse
              </Text>
            </Grid.row>
          </Grid.col>
        </Grid.row>
      </Grid.grid>
    </>
  );
};

export default Brand;
