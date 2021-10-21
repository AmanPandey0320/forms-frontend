import Container from "../container";
import { Nav } from "./style";
import Brand from "../brand";

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
        <Brand />
      </Container>
    </Nav>
  );
};

export default FormNavBar;
