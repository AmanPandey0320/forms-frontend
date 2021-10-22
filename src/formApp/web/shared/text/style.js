import styled from "styled-components";
import { color } from "styled-system";

export const Span = styled.span`
  ${color};
  font-size: ${(props) => (props.size ? props.size : 16)}px;
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  font-family: ${(props) => (props.font ? props.font : "Arial")};
  @media screen and (max-width: 1200px) {
    font-size: ${(props) => (props.size ? props.size : 16)}px;
  }
  @media screen and (max-width: 800px) {
    font-size: ${(props) => (props.size ? 0.8 * props.size : 14)}px;
  }
  @media screen and (max-width: 500px) {
    font-size: ${(props) => (props.size ? 0.62 * props.size : 12)}px;
  }
  @media screen and (max-width: 360px) {
    font-size: ${(props) => (props.size ? 0.5 * props.size : 12)}px;
  }
`;

export const Para = styled.p`
  ${color};
  font-size: ${(props) => (props.size ? props.size : 16)}px;
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  font-family: ${(props) => (props.font ? props.font : "Arial")};
  word-wrap: ${(props) => (props.wrap ? props.wrap : "initial")};
  @media screen and (max-width: 1200px) {
    font-size: ${(props) => (props.size ? props.size : 16)}px;
  }
  @media screen and (max-width: 800px) {
    font-size: ${(props) => (props.size ? 0.8 * props.size : 14)}px;
  }
  @media screen and (max-width: 500px) {
    font-size: ${(props) => (props.size ? 0.62 * props.size : 12)}px;
  }
  @media screen and (max-width: 360px) {
    font-size: ${(props) => (props.size ? 0.5 * props.size : 12)}px;
  }
`;

export const Div = styled.div`
  ${color};
  font-size: ${(props) => (props.size ? props.size : 16)}px;
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  font-family: ${(props) => (props.font ? props.font : "Arial")};
  word-wrap: ${(props) => (props.wrap ? props.wrap : "initial")};
  @media screen and (max-width: 1200px) {
    font-size: ${(props) => (props.size ? props.size : 16)}px;
  }
  @media screen and (max-width: 800px) {
    font-size: ${(props) => (props.size ? 0.8 * props.size : 14)}px;
  }
  @media screen and (max-width: 500px) {
    font-size: ${(props) => (props.size ? 0.62 * props.size : 12)}px;
  }
  @media screen and (max-width: 360px) {
    font-size: ${(props) => (props.size ? 0.5 * props.size : 12)}px;
  }
`;
