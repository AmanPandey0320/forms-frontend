import formThemes from '../themes/formsthemes';
import {withStyles} from '@material-ui/core/styles';
import {Radio} from '@material-ui/core';

const BlueRadio = withStyles({
    root: {
      color: formThemes[0].default,
      '&$checked': {
        color: formThemes[0].focus,
      },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const BlackRadio = withStyles({
    root: {
      color: formThemes[1].default,
      '&$checked': {
        color: formThemes[1].focus,
      },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const GreenRadio = withStyles({
    root: {
      color: formThemes[2].default,
      '&$checked': {
        color: formThemes[2].focus,
      },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const OrangeRadio = withStyles({
    root: {
      color: formThemes[3].default,
      '&$checked': {
        color: formThemes[3].focus,
      },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const PurpleRadio = withStyles({
    root: {
      color: formThemes[4].default,
      '&$checked': {
        color: formThemes[4].focus,
      },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const AmberRadio = withStyles({
    root: {
      color: formThemes[5].default,
      '&$checked': {
        color: formThemes[5].focus,
      },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const Radios = [<BlueRadio/>,<BlackRadio/>,<GreenRadio/>,<OrangeRadio/>,<PurpleRadio/>,<AmberRadio/>]

export default Radios;