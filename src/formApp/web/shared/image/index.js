import React from 'react';
import  { ImageWrapper } from './styles';
import propTypes from 'prop-types';

const Image = ({src,alt,...props}) => {
    return ( 
        <ImageWrapper className="img" src={src} alt={alt} {...props}/>
     );
}

 
export default Image;

Image.propTypes = {
    src:propTypes.string.isRequired,
    alt:propTypes.string.isRequired,
    height:propTypes.string,
    width:propTypes.string
}

Image.defaultProps = {
    m:0,
}