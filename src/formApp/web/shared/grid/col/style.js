import styled from "styled-components";
import { justifyContent } from "styled-system";

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
  flex-wrap: ${(props) => (props.wrap ? props.wrap : "wrap")};
  flex: ${(props) => (props.xl ? props.xl : 1)};
  @media screen and (max-width: 1200px) {
    flex: ${(props) => (props.lg ? props.lg : 1)};
  }
  @media screen and (max-width: 800px) {
    flex: ${(props) => (props.md ? props.md : 1)};
  }
  @media screen and (max-width: 500px) {
    flex: ${(props) => (props.sm ? props.sm : 1)};
  }
  @media screen and (max-width: 360px) {
    flex: ${(props) => (props.xs ? props.xs : 1)};
  }
`;
