import styled,{ css } from 'styled-components';
import { color,position,top,bottom,left,right,borderRadius,padding } from 'styled-system';

export const ButtonWrapper = styled.div`
cursor:pointer;
${color};
${position};
${top};
${left};
${bottom};
${right};
${borderRadius};
${padding};
${props => props.width && css`
    max-width:${props.width}
    width:100%;
`}
`;