import formTheme from '../themes/formsthemes';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

//bbgopa

const BlueSwitch = withStyles({
    switchBase: {
      color: formTheme[0].light,
      '&$checked': {
        color: formTheme[0].body,
      },
      '&$checked + $track': {
        backgroundColor: formTheme[0].body,
      },
    },
    checked: {},
    track: {},
})(Switch);

const BlackSwitch = withStyles({
    switchBase: {
      color: formTheme[1].light,
      '&$checked': {
        color: formTheme[1].body,
      },
      '&$checked + $track': {
        backgroundColor: formTheme[1].body,
      },
    },
    checked: {},
    track: {},
})(Switch);

const GreenSwitch = withStyles({
    switchBase: {
      color: formTheme[2].light,
      '&$checked': {
        color: formTheme[2].body,
      },
      '&$checked + $track': {
        backgroundColor: formTheme[2].body,
      },
    },
    checked: {},
    track: {},
})(Switch);

const OrangeSwitch = withStyles({
    switchBase: {
      color: formTheme[3].light,
      '&$checked': {
        color: formTheme[3].body,
      },
      '&$checked + $track': {
        backgroundColor: formTheme[3].body,
      },
    },
    checked: {},
    track: {},
})(Switch);

const PurpleSwitch = withStyles({
    switchBase: {
      color: formTheme[4].light,
      '&$checked': {
        color: formTheme[4].body,
      },
      '&$checked + $track': {
        backgroundColor: formTheme[4].body,
      },
    },
    checked: {},
    track: {},
})(Switch);

const AmberSwitch = withStyles({
    switchBase: {
      color: formTheme[5].light,
      '&$checked': {
        color: formTheme[5].body,
      },
      '&$checked + $track': {
        backgroundColor: formTheme[5].body,
      },
    },
    checked: {},
    track: {},
})(Switch);


const Switches = [BlueSwitch,BlackSwitch,GreenSwitch,OrangeSwitch,PurpleSwitch,AmberSwitch];

export default Switches;