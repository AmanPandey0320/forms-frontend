import React from 'react';
import { CardWrapper } from './style';

const Card = ({size,opacity,color,radius,children,className,...props}) => {
    const defaultClass = ['card'];
    defaultClass.push(className);
    return ( 
        <CardWrapper
            className={defaultClass.join(' ')}
            height = {size}
            width = {size}
            opacity = {opacity}
            borderRadius = {radius}
            {...props}
        >
            {children}
        </CardWrapper>
    );
}
 
export default Card;