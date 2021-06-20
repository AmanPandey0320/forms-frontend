import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    cRoot:{
        backgroundColor:'#f0fff3',
        paddingInline:theme.spacing(8),
        paddingTop:theme.spacing(2),
        maxWidth:'100vw',
        [theme.breakpoints.down('sm')]:{
            paddingInline:theme.spacing(4),
            paddingTop:theme.spacing(2),
        },
        [theme.breakpoints.down('xs')]:{
            paddingInline:theme.spacing(4),
            paddingTop:theme.spacing(1),
        },
    },
    eRoot:{

    },
    cItem:{
        textAlign:'center',
        cursor:'pointer'
    }
}));

export default useStyles;