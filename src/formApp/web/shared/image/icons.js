import React from 'react';
import  { ImageWrapper } from './styles';
import propTypes from 'prop-types';

const Icon = ({src,size,...props}) => {
    return ( 
        <ImageWrapper src={src} alt='icon' height={size} width={size}/>
     );
}

 
export default Icon;

Icon.propTypes = {
    src:propTypes.string.isRequired,
    height:propTypes.string,
    width:propTypes.string
}

Icon.defaultProps = {
    m:0,
}