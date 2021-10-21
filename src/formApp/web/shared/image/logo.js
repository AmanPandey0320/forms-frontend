import React from 'react';
import Image from './index';
import Container from '../container/index';
import Title from '../title/index';
import { useMediaQuery } from 'react-responsive';

const Logo = ({color,brand,src,top,...props}) => {

    const constrains = useMediaQuery({
        query:'(max-device-width: 750px)'
    })?["40px","1.5em"]:["60px","2.4em"];

    return ( 
        <Container display="flex" flexDirection="row" >
            <span>{src && <Image src={src} alt={brand} height={constrains[0]} width={constrains[0]}/> }</span>
            <Title space='8px' color={color} top={top} fontFamily='Exo' fontSize={constrains[1]} text={brand}/>
        </Container>
    );
}
 
export default Logo;