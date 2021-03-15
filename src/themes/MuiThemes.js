import { createMuiTheme } from "@material-ui/core";
import { amber, blue, green, grey, orange, purple } from "@material-ui/core/colors";

const BlueTheme = createMuiTheme({
    palette:{
        primary:blue,
    },
});

const BlackTheme = createMuiTheme({
    palette:{
        primary:grey,
    },
});

const GreenTheme = createMuiTheme({
    palette:{
        primary:green,
    },
});

const OrangeTheme = createMuiTheme({
    palette:{
        primary:orange,
    },
});

const PurpleTheme = createMuiTheme({
    palette:{
        primary:purple,
    },
});

const AmberTheme = createMuiTheme({
    palette:{
        primary:amber,
    },
});

const MuiThemes = [BlueTheme,BlackTheme,GreenTheme,OrangeTheme,PurpleTheme,AmberTheme];

export default MuiThemes;