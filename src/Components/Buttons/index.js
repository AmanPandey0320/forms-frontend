import React from 'react';
import Container from '../Container';
import propsTypes from 'prop-types';
import {ButtonWrapper} from './styles';


const Button = ({color,children,...props}) => {
    return ( 
        <ButtonWrapper color={color} {...props}>
            <Container display="flex" flexDirection="row" fullWidth={true}>
                {children}
            </Container>
        </ButtonWrapper>
     );
}

export default Button

Button.propsTypes = {
    color:propsTypes.string,
    position:propsTypes.string,
    top:propsTypes.string,
    bottom:propsTypes.string,
    right:propsTypes.string,
    left:propsTypes.string,
    width:propsTypes.string
}

