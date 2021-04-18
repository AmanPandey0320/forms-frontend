import styled,{ css } from 'styled-components';
import { color,position,top,bottom,left,right,borderRadius,padding,width,margin } from 'styled-system';

export const ButtonWrapper = styled.div`
cursor:pointer;
text-align:center;
${color};
${position};
${top};
${left};
${bottom};
${right};
${borderRadius};
${padding};
${width};
${margin};
.container{
    margin:0px;
    padding:0px;
}
`;