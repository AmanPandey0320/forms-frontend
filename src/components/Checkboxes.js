import {withStyles} from '@material-ui/core/styles';
import CheckBox from '@material-ui/core/Checkbox';
import formThemes from '../themes/formsthemes';

const BlueCheckbox = withStyles({
    root: {
      color: formThemes[0].default,
      '&$checked': {
        color: formThemes[0].focus,
      },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const BlackCheckbox = withStyles({
    root: {
      color: formThemes[1].default,
      '&$checked': {
        color: formThemes[1].focus,
      },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);
const GreenCheckbox = withStyles({
    root: {
      color: formThemes[2].default,
      '&$checked': {
        color: formThemes[2].focus,
      },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);
const OrangeCheckbox = withStyles({
    root: {
      color: formThemes[3].default,
      '&$checked': {
        color: formThemes[3].focus,
      },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);
const PurpleCheckbox = withStyles({
    root: {
      color: formThemes[4].default,
      '&$checked': {
        color: formThemes[4].focus,
      },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);
const AmberCheckbox = withStyles({
    root: {
      color: formThemes[5].default,
      '&$checked': {
        color: formThemes[5].focus,
      },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Checkboxes = [BlueCheckbox,BlackCheckbox,GreenCheckbox,OrangeCheckbox,PurpleCheckbox,AmberCheckbox];

export default Checkboxes;