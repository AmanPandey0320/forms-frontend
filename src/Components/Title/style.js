import styled, {css} from 'styled-components';
import { color } from 'styled-system';

export const TitleWrapper = styled.span`
    ${props => props.space && css`
        margin-left:${props.space};
        margin-right:${props.space};
    `}
    font-family:${props => props.fontFamily || 'sans-serif'};
    font-size:${ props => props.fontSize || '1.5em'};
    font-weight:${props => props.fontWeight || '600'};
    ${color};
`;