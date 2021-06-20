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
import Expanded from './sections/template-expanded';
import { Heading1, TopDiv } from '../../css/dashBoard';
import { LightGlowButton } from '../../Components/Buttons/MUIbuttons';
import { TiArrowUnsorted } from 'react-icons/ti';
import { HiTemplate } from 'react-icons/hi'
import { SiFormstack } from 'react-icons/si';

const Dashboard = (props) => {
    const classes = useStyles();
    const[fade,setFade] = useState(false);
    const clickHandler = () => {
        setFade(!fade);
    }
    const dummy = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt porro aspernatur ratione vitae iste doloribus beatae, nesciunt, magnam sunt cum voluptatum non accusantium qui totam? Voluptatum rem, eos facere saepe pariatur accusantium iste blanditiis eaque ipsa nemo cupiditate architecto laboriosam numquam esse explicabo repellat odio excepturi. Veritatis nam optio alias? Odit, adipisci totam quaerat rem quasi sapiente hic ipsam. Mollitia voluptate aliquid voluptatibus tempora in ipsam possimus? Accusamus omnis culpa ipsa perferendis totam, odio itaque impedit natus cupiditate nihil ab tempora voluptate pariatur dolorum exercitationem beatae alias saepe repudiandae. Pariatur soluta obcaecati rem quibusdam libero quis. Pariatur maxime mollitia exercitationem!'
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
                <Navbar bg='#ffffff' color="#000000"/>
            </Sticky>
            <TopDiv>
                <Heading1>
                    <HiTemplate color="#0080ff" size="1.5em"/>&nbsp;&nbsp;Templates
                </Heading1>
                <LightGlowButton clickHandler={clickHandler} >
                    Templates&nbsp;<TiArrowUnsorted/>
                </LightGlowButton>
            </TopDiv>
            {!fade && Template(CollapsedTemplate,'Aman')}
            {fade && Template(Expanded,'Aman')}
            <br/>
            <Fade duration={500} bottom when={!fade}>
                <div>
                    <TopDiv>
                        <Heading1>
                            <SiFormstack color="#0080ff" size="1.5em"/>&nbsp;&nbsp;Your Forms
                        </Heading1>
                    </TopDiv>
                </div>
            </Fade>
        </div>
     );
}
 
export default Dashboard;