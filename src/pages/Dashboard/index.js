import React, { useState } from 'react';
import Container from '../../Components/Container';
import useStyles from '../../MUIstyles/dashboard';
import { Button } from '@material-ui/core';
import { Fade } from 'react-reveal';
import { handleFade } from '../../logic/dashboard'
import Navbar from '../../Components/Navbar/home-nav';
import Sticky from 'react-stickynode';
import {Template} from './sections/template-hoc';
import CollapsedTemplate from './sections/template-collapsed';

const Dashboard = (props) => {
    const classes = useStyles();
    const[fade,setFade] = useState(false);
    return ( 
        <div className={classes.root} >
            {/* <div className={classes.template}>
                <Button color="secondary" variant="contained" onClick={handleFade(setFade,fade)} >fade</Button>
                {!fade && <div>{dummy+dummy+dummy+dummy+dummy+dummy+dummy+dummy+dummy+dummy}</div>}
                {fade && <div>{dummy+dummy+dummy}</div>}
            </div>
            <Fade duration={500}  bottom when={fade} >
            <div id="my-fade" className={classes.userForms}>
                {dummy+dummy+dummy+dummy+dummy+dummy+dummy+dummy+dummy+dummy}
            </div>
            </Fade> */}
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                <Navbar bg='#0080ff' color="#ffffff"/>
            </Sticky>
            {Template(CollapsedTemplate,'Aman')}
        </div>
     );
}
 
export default Dashboard;