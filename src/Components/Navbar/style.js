import styled from 'styled-components';
import { color,display,fontFamily,fontSize,fontWeight} from 'styled-system';

export const Nav = styled.nav`
${color};
width:100%;
max-height:75px;
display:flex;
flex-diection:row;
padding:0px;
margin:0px;
box-shadow: 0px 0px 4px;
.container{
    margin:0px;
    padding:2px 4px;
    display:flex;
    flex-direction:row;
    position:relative;
}
`;
