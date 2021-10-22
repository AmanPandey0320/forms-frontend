import styled from "styled-components";

export const CircularLogo = styled.img`
  width: ${(props) => (props.radius ? props.radius : 32)}px;
  border-radius: ${(props) => (props.radius ? props.radius : 32)}px;
  margin: 4px;
  @media screen and (max-width: 1200px) {
    width: ${(props) => (props.radius ? props.radius : 32)}px;
    border-radius: ${(props) => (props.radius ? props.radius : 32)}px;
  }
  @media screen and (max-width: 800px) {
    width: ${(props) => (props.radius ? 0.8 * props.radius : 26)}px;
    border-radius: ${(props) => (props.radius ? 0.8 * props.radius : 26)}px;
    margin: 3px;
  }
  @media screen and (max-width: 500px) {
    width: ${(props) => (props.radius ? 0.62 * props.radius : 20)}px;
    border-radius: ${(props) => (props.radius ? 0.62 * props.radius : 20)}px;
    margin: 2px;
  }
  @media screen and (max-width: 360px) {
    width: ${(props) => (props.radius ? 0.5 * props.radius : 16)}px;
    border-radius: ${(props) => (props.radius ? 0.5 * props.radius : 16)}px;
    margin: 2px;
  }
`;
