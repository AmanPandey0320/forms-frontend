import React from 'react';
import Image from './index';
import Container from '../Container/index';
import Title from '../Title/index';

const Logo = ({color,brand,src,...props}) => {
    return ( 
        <Container display="flex" flexDirection="row">
            <span>{src && <Image src={src} alt={brand} height="65px" width="65px"/> }</span>
            <Title space='2px' color={color} fontFamily='Exo' fontSize="32px" text={brand}/>
        </Container>
    );
}
 
export default Logo;