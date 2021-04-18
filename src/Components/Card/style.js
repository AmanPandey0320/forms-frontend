import styled,{ css } from 'styled-components';
import { height,width,color,opacity,borderRadius } from 'styled-system'

export const CardWrapper = styled.div`
${height};
${width};
${color};
${opacity};
${borderRadius};
${props => props.shadow && css`
    box-shadow: 2px 2px 2px 2px #000000;
`}
`;
