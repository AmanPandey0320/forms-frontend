import {
  Drawer,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Grid,
  Icon,
} from "@material-ui/core";
import { ImCross, ImImage } from "react-icons/im";
import { HiColorSwatch } from "react-icons/hi";
import { ExpandMore } from "@material-ui/icons";
import Portal from "../portal";
import { formDrawerStyles } from "./styles";
import { themes } from "../../../assets/data/theme";
import { SwatchesPicker } from "react-color";
import { editHeader } from "./logic";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { saveForm } from "../../../lib/thunks/form.thunk";
import { useRef } from "react";
import { useState } from "react";

/**
 *
 * @param {*} param0
 * @returns
 */
const FormDrawer = ({ open, onClose, ...props }) => {
  /** VARIABLES */
  const classes = formDrawerStyles();
  const theme = useSelector((state) => state.form.data.theme);
  const dispatch = useDispatch();
  const [color_for, setColorFor] = useState("bgColor");
  const isMounted = useRef(false);

  /**EFFECTS */
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(saveForm());
    }, 1000);
    if (isMounted.current === false) {
      isMounted.current = true;
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [theme]);

  /**VIEWS */
  return (
    <>
      <Portal eid="drawer-root">
        <Drawer open={open} onClose={onClose} anchor="right">
          <Box className={classes.drawer}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Grid container spacing={2} direction="row">
                  <Grid item>
                    <Icon color="primary">
                      <ImImage />
                    </Icon>
                  </Grid>
                  <Grid item>
                    <Typography>Header image</Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem onClick={editHeader("header", null)} button>
                    <ListItemIcon>
                      <ImCross color="tomato" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>Remove headers</Typography>
                    </ListItemText>
                  </ListItem>
                  {themes.map((theme, idx) => {
                    return (
                      <ListItem
                        className={classes.listItem}
                        key={theme.id}
                        onClick={editHeader("header", idx)}
                        button
                      >
                        <div>
                          <img
                            className={classes.image}
                            src={theme.img}
                            alt={`header img ${theme.id}`}
                            width="100%"
                          />
                        </div>
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Grid container spacing={2} direction="row">
                  <Grid item>
                    <Icon color="primary">
                      <HiColorSwatch />
                    </Icon>
                  </Grid>
                  <Grid item>
                    <Typography>Theme color</Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={1} direction="column">
                  <Grid item>
                    <Typography>Select color</Typography>
                  </Grid>
                  <Grid item>
                    <SwatchesPicker
                      width="auto"
                      onChange={(c, e) => editHeader(color_for, c.hex)()}
                    />
                  </Grid>
                  <Grid item>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Color for:</FormLabel>
                      <RadioGroup
                        name="color_for"
                        onChange={(e) => setColorFor(e.target.value)}
                        value={color_for}
                      >
                        <FormControlLabel
                          value="bgColor"
                          control={<Radio color="primary" />}
                          label="Background"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="color"
                          control={<Radio color="primary" />}
                          label="Body"
                          labelPlacement="end"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Drawer>
      </Portal>
    </>
  );
};

export default FormDrawer;
