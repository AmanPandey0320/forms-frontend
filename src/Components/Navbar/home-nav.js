import React, { useContext } from 'react';
import {Nav} from './style';
import Container from '../Container/index'
import Logo from '../Image/logo';
import logo from '../../assets/images/logo3.svg'
import GoogleButton from '../Buttons/GoogleBtn'
import UserContext from '../../context/userContext';

const Navbar = ({color,...props}) => {
    // console.log(props);
    const authState = useContext(UserContext);

    return ( 
        <Nav {...props}>
            <Container color={color} fullWidth={true}>
                <Logo color={color} top='13%' src={logo} brand="Forms"/>
                { !authState.verified && <GoogleButton/> }
            </Container>
        </Nav>
     );
}

const mapStateToProps = (state) => {
    return {
        token:state.token,
        username:state.name
    }
}
 
export default Navbar;