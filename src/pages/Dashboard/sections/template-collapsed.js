import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { SectionWrapper } from '../../../css/homeStyles';
import blankFormIcon from '../../../assets/images/add.svg';
import Avatar from 'react-avatar';
import { templates } from '../../../assets/data/dummyData'

class Collapsed extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <SectionWrapper  width="100%">
                <Container className = {classes.cRoot}>
                    <Grid spacing={1} container>
                        <Grid className={classes.cItem} xs={4} lg={2} sm={3} item>
                            <img width="100px" src={blankFormIcon} alt="create blank form"/>
                        </Grid>
                        {
                            templates.slice(0,5).map(template => {
                                return(
                                    <Grid className={classes.cItem} xs={4} lg={2} sm={3} item>
                                        <Avatar size="100px" name={template.title}/>
                                        <Typography>{template.title}</Typography>
                                        <Typography>{template.by}</Typography>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </SectionWrapper>
        )
    }
}

export default Collapsed;