import React from 'react';
import Image from './index';
import Container from '../Container/index';
import Title from '../Title/index';
import { useMediaQuery } from 'react-responsive';

const Logo = ({color,brand,src,...props}) => {

    const constrains = useMediaQuery({
        query:'(max-device-width: 700px)'
    })?["40px","1.5em"]:["64px","2.4em"];

    return ( 
        <Container display="flex" flexDirection="row">
            <span>{src && <Image src={src} alt={brand} height={constrains} width={constrains[0]}/> }</span>
            <Title space='8px' color={color} fontFamily='Exo' fontSize={constrains[1]} text={brand}/>
        </Container>
    );
}
 
export default Logo;