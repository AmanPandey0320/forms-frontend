import {React,useState,useEffect} from 'react';
import { Card } from 'react-bootstrap';
import { Button, ThemeProvider } from '@material-ui/core';
import MuiThemes from '../themes/MuiThemes';
import { useHistory } from 'react-router';

const theme = MuiThemes[0];


const Home = () => {

    const history = useHistory();


        return(
            <div className="my-nav-below">
                <div className = "home-head">
                    <p className="head-txt">Survey your choice</p>
                    <br/>
                    <img className="home-img" />
                    <div className="home-head-content">
                        <Card className="home-head-card">
                            <h4 style={{color:"#3d3d3d"}}>Create a survey</h4>
                            <div style={{textAlign:'center',fontWeight:300}}>

                                <img src="./assets/logo.svg" width='25%'/>
                            </div>
                            <p style={{maxWidth:"80%",margin:'auto'}}>Collect information and organize them with us. For free</p>
                            <span className="card-btn-home">
                                <ThemeProvider theme={theme}>
                                    <Button onClick={()=>{history.push('/dashboard')}} variant="contained" color="primary">Get Started</Button>
                                </ThemeProvider>
                            </span>
                        </Card>

                        <Card className="home-head-card">
                            <h4 style={{color:"#3d3d3d"}}>Let's make take an exam</h4>
                            <div style={{textAlign:'center',fontWeight:300}}>

                                <img src="./assets/test.svg" width='25%'/>
                            </div>
                            <p style={{maxWidth:"80%",margin:'auto'}}>Taking exams and managing marks isn't easy. Let us help you!</p>
                            <span className="card-btn-home">
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" color="primary">Learn more</Button>
                                </ThemeProvider>
                            </span>
                        </Card>
                    </div>
                    
                </div>
                
            </div>
        );

}

export default Home;