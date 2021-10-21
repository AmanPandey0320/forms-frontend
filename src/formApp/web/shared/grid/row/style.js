import styled from "styled-components";
import { justifyContent } from "styled-system";

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  flex-wrap: ${(props) => (props.wrap ? props.wrap : "wrap")};
  flex-grow: ${(props) => (props.grow ? props.grow : 1)};
  flex-shrink: ${(props) => (props.shrink ? props.shrink : 1)};
  ${justifyContent};
  transition: all 0.2s ease linear;
`;
