import styled ,{ css } from 'styled-components';

export const ImageWrapper = styled.img`
display:block;
height:${ props => props.height || 'auto'};
width:${ props => props.width || 'auto'};
max-width:100%;
`;