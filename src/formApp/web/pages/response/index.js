import { Container, Grid, Toolbar } from "@material-ui/core";
import Sticky from "react-stickynode";
import Canvas from "../../shared/canvas";
import Navbar from "../../shared/navbar/formNavBar";
import Header from "./element/header";
import useStyles from "./styles";
import Heading from "./element/heading";
import Section from "./section";
import Footer from "../../shared/footer";

const Responder = (props) => {
  const classes = useStyles();
  return (
    <>
      <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
        <Navbar bg="#ffffff" color="#262626" response={true} />
      </Sticky>
      <Canvas bg="grey">
        <Container className={classes.formContainer}>
          <Grid container direction="column">
            <Grid item>
              <Toolbar />
            </Grid>
            <Grid item>
              <Header />
            </Grid>
            <Grid item>
              <Heading />
            </Grid>
            <Grid item>
              <Section />
            </Grid>
            <Grid item>
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </Canvas>
    </>
  );
};

export default Responder;
