import { Button, withStyles } from "@material-ui/core";

export const LightGlowButton = ({children,...props}) => {
    const { clickHandler } = props;
    const StyledBtn = withStyles({
        button:{
            textTransform:'none',
            paddingInline:'16px',
            '&:hover':{
                backgroundColor:'#e4f1ff'
            },
            boxShadow:'2px 2px 2px'
        }
    })(({classes})=>(
        <Button onClick={e=>clickHandler()} className={classes.button}>
            {children}
        </Button>
    ));
    return ( 
        <StyledBtn/>
    );
}
 
