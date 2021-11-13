import styled from "styled-components";
import { background } from "styled-system";

export const CanvasWrapper = styled.div`
  ${background}
  min-height: 100vh;
  overflow-y: scroll;
  overflow-x:hidden;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  margin:0px;
  padding:0px;
  transition: all 0.2s ease linear;
`;
