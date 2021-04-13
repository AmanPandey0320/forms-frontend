import styled, {css} from 'styled-components';
import { color } from 'styled-system';

export const TitleWrapper = styled.span`
    margin:0px;
    position:relative;
    ${props => props.space && css`
        left:${props.space};
    `}
    font-family:${props => props.fontFamily || 'sans-serif'};
    font-size:${ props => props.fontSize || '1.5em'};
    font-weight:${props => props.fontWeight || '600'};
    top:14%;
    ${color};
`;