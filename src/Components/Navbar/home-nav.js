import React from 'react';
import {Nav} from './style';
import Container from '../Container/index'
import Logo from '../Image/logo';
import logo from '../../assets/images/logo3.svg'
import Button from '../Buttons/index'
import GoogleIcon from '../../assets/icons/google.svg';
import Icon from '../Image/icons';
import { useMediaQuery } from 'react-responsive';
import dotenv from 'dotenv';
import { GoogleLogin } from 'react-google-login';
dotenv.config();

const clientId = process.env.REACT_APP_google_client_id;

const responseGoogle = (responce) => {
    const google_token = responce.googleId;
    const name = responce.profileObj.name;
    const data = {google_token,name};
    console.log(data);
    //TODO: call the api to sign in for google token

}

const GoogleBtn = ({renderProps})=>{
    const size = useMediaQuery({
        query:'(max-device-width: 750px)'
    })?["1.1em","2%","4px"]:["2em","1%","8px"];
    return(
        <GoogleLogin
            clientId={clientId}
            render={renderProps => (
                <Button onClick={renderProps.onClick} position="absolute" bg="#fff" borderRadius={size[2]} padding="4px" top="20%" right={size[1]} >
                    <Icon src ={GoogleIcon} size={size[0]}/>
                </Button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
}

const Navbar = ({color,...props}) => {
    const size = useMediaQuery({
        query:'(max-device-width: 750px)'
    })?["1.1em","2%","4px"]:["2em","1%","8px"];
    return ( 
        <Nav {...props}>
            <Container color={color} fullWidth={true}>
                <Logo color={color} src={logo} brand="Forms"/>
                <GoogleBtn/>
            </Container>
        </Nav>
     );
}
 
export default Navbar;