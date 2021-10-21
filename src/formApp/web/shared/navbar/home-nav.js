import React, { useContext } from 'react';
import {Nav} from './style';
import Container from '../container/index'
import Logo from '../image/logo';
import logo from '../../../assets/images/logo3.svg'
import GoogleButton from '../buttons/GoogleBtn'
import UserContext from '../../../lib/context/userContext';

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