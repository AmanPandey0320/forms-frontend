import { amber, blue,deepOrange,deepPurple,green,grey,lightBlue } from '@material-ui/core/colors';

const Blue = {
    body:blue[500],
    bg:blue[100],
    default:blue[400],
    focus:blue[600]
}

const Green = {
    body:green[500],
    bg:green[100],
    default:green[400],
    focus:green[600]
}

const Orange = {
    body:deepOrange[500],
    bg:deepOrange[100],
    default:deepOrange[400],
    focus:deepOrange[600]
}

const Purple = {
    body:deepPurple[500],
    bg:deepPurple[100],
    default:deepPurple[400],
    focus:deepPurple[600]
}

const Black = {
    body:grey[700],
    bg:grey[200],
    default:grey[400],
    focus:grey[800]
}

const Amber = {
    body:amber[500],
    bg:amber[100],
    default:amber[400],
    focus:amber[600]
}

const formThemes = [Blue,Black,Green,Orange,Purple,Amber];

export default formThemes;