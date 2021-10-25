import styled from "styled-components";

/**
 * @description circilar logo
 */
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

/**
 * @description recrangular logo
 */
export const RectangularAvatar = styled.img`
  width: ${(props) => (props.width ? props.width : 32)}px;
  height: ${(props) => (props.height ? props.height : 32)}px;
  border-radius: ${(props) => (props.width ? props.width : 32)}px;
  margin: 4px;
  @media screen and (max-width: 1200px) {
    width: ${(props) => (props.width ? props.width : 32)}px;
    height: ${(props) => (props.height ? props.height : 32)}px;
    border-radius: ${(props) => (props.width ? props.width : 32)}px;
  }
  @media screen and (max-width: 800px) {
    width: ${(props) => (props.width ? 0.8 * props.width : 26)}px;
    height: ${(props) => (props.height ? props.height : 26)}px;
    border-radius: ${(props) => (props.width ? 0.8 * props.width : 26)}px;
    margin: 3px;
  }
  @media screen and (max-width: 500px) {
    width: ${(props) => (props.width ? 0.62 * props.width : 20)}px;
    height: ${(props) => (props.height ? props.height : 20)}px;
    border-radius: ${(props) => (props.width ? 0.62 * props.width : 20)}px;
    margin: 2px;
  }
  @media screen and (max-width: 360px) {
    width: ${(props) => (props.width ? 0.5 * props.width : 16)}px;
    height: ${(props) => (props.height ? props.height : 16)}px;
    border-radius: ${(props) => (props.width ? 0.5 * props.width : 16)}px;
    margin: 2px;
  }
`;

/**
 * @description square avatar component
 */
export const SquareAvatar = styled.img`
  width: ${(props) => (props.size ? props.size : 32)}px;
  margin: 4px;
  @media screen and (max-width: 1200px) {
    width: ${(props) => (props.size ? props.size : 32)}px;
  }
  @media screen and (max-width: 800px) {
    width: ${(props) => (props.size ? 0.8 * props.size : 26)}px;
    margin: 3px;
  }
  @media screen and (max-width: 500px) {
    width: ${(props) => (props.size ? 0.62 * props.size : 20)}px;
    margin: 2px;
  }
  @media screen and (max-width: 360px) {
    width: ${(props) => (props.size ? 0.5 * props.size : 16)}px;
    margin: 2px;
  }
`;

export const TextAvatar = styled.div`
  width: ${(props) => (props.size ? props.size : 32)}px;
  height: ${(props) => (props.size ? props.size : 32)}px;
  background-color: ${(props) => (props.color ? props.color : "grey")};
  text-align: center;
  @media screen and (max-width: 1200px) {
    width: ${(props) => (props.size ? props.size : 32)}px;
    height: ${(props) => (props.size ? props.size : 32)}px;
  }
  @media screen and (max-width: 800px) {
    width: ${(props) => (props.size ? 0.8 * props.size : 26)}px;
    height: ${(props) => (props.size ? 0.8 * props.size : 26)}px;
  }
  @media screen and (max-width: 500px) {
    width: ${(props) => (props.size ? 0.62 * props.size : 20)}px;
    height: ${(props) => (props.size ? 0.62 * props.size : 20)}px;
  }
  @media screen and (max-width: 360px) {
    width: ${(props) => (props.size ? 0.5 * props.size : 16)}px;
    height: ${(props) => (props.size ? 0.5 * props.size : 16)}px;
  }
`;
