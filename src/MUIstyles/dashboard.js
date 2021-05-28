import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        margin:0,
    },
    template:{
        margin:'0px',
        backgroundColor:'blue',
    },
    userForms:{
        margin:'0px',
        zIndex:1,
        backgroundColor:'red',
        display:'none'
    }
}));

export default useStyles;