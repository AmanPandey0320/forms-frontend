import styled from "styled-components";
import { justifyContent } from "styled-system";

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
  flex-wrap: ${(props) => (props.wrap ? props.wrap : "wrap")};
  flex-grow: ${(props) => (props.grow ? props.grow : 1)};
  flex-shrink: ${(props) => (props.shrink ? props.shrink : 1)};
  flex: ${(props) => (props.size ? props.size : 1)};
`;
