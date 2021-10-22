import Container from "../container";
import { Nav } from "./style";
import Brand from "../brand";
import Grid from "../grid";

const FormNavBar = ({ color, ...props }) => {
  return (
    <Nav>
      <Container
        fullWidth={true}
        bg="#ffffff"
        display="flex"
        flexDirection="row"
        justifyContent="initial"
      >
        <Grid.row>
          <Grid.col xl={1} lg={1} md={2} sm={3} xs={2} >
            {" "}
            <Brand />
          </Grid.col>
          <Grid.col xl={4} lg={4} md={3} sm={3} >
            <Grid.row reverse={true}></Grid.row>
          </Grid.col>
        </Grid.row>
      </Container>
    </Nav>
  );
};

export default FormNavBar;
