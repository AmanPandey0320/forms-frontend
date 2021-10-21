import { CanvasWrapper } from "./styles";

const Canvas = ({ bg, children, ...props }) => {
  return <CanvasWrapper background={bg}>{children}</CanvasWrapper>;
};

export default Canvas;
