import React from 'react';
import {Nav} from './style';
import Container from '../Container/index'
import Logo from '../Image/logo';
import logo from '../../assets/images/logo3.svg'

const Navbar = ({color,...props}) => {
    return ( 
        <Nav {...props}>
            <Container color={color}>
                <Logo color={color} src={logo} brand="Forms"/>
            </Container>
        </Nav>
     );
}
 
export default Navbar;