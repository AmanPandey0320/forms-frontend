import styled,{ css } from 'styled-components';
import { width,height,minHeight } from 'styled-system';

export const SectionWrapper = styled.div`
${width};
${height};
${minHeight};
.img{
    
    filter: blur(3px);
    -webkit-filter: blur(3px);
    position:absolute;
    z-index: -1;
}
`;

export const CardWrapper = styled.div`
position:relative;
top:32%;
display:flex;
flex-direction:row;
justify-content:space-evenly;
.card{
    margin:auto;
    margin-bottom:12%;
}
.card:hover{
    opacity:1.0;
    cursor:pointer;
}
.img{
    filter: blur(0px);
    -webkit-filter: blur(0px);
    position:relative;
    z-index: 0;
    margin:auto;
    top:16%;
    width:25%;
    opacity:1.0;
}
@media (max-width:760px){
    .card{
        width:80%;
        margin:auto;
        margin-bottom:4%;
        opacity:1.
    }
    
    top:16%;
    flex-direction:column;
}
@media (max-width:400px){
    top:16%;
    flex-direction:column;
    .card{
        margin:auto;
        margin-bottom:12%;
    }
}

`;