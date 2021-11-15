import styled from "styled-components";

export const TopDiv = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const Heading1 = styled.div`
    padding-inline:${(props) => (props.space ? props.space : "8px")};
    display:flex;
    align-items:center;
    font-size:x-large;
    color:#5f5f5f;
`;
