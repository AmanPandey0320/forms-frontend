import styled, {css} from 'styled-components';
import { color,top,textAlign } from 'styled-system';

export const TitleWrapper = styled.p`
    margin:0px;
    position:relative;
    ${props => props.space && css`
        left:${props.space};
    `}
    font-family:${props => props.fontFamily || 'sans-serif'};
    font-size:${ props => props.fontSize || '1.5em'};
    font-weight:${props => props.fontWeight || '600'};
    ${top};
    ${color};
    ${textAlign};

`;