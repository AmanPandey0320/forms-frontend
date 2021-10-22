import { TitleWrapper } from "./style";
import propTypes from "prop-types";

const Title = ({
  color,
  fontWeight,
  fontFamily,
  fontSize,
  space,
  top,
  text,
  textAlign,
}) => {
  return (
    <TitleWrapper
      className="title"
      textAlign={textAlign}
      top={top}
      space={space}
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {text}
    </TitleWrapper>
  );
};

export default Title;

Title.propTypes = {
  color: propTypes.string,
  text: propTypes.string.isRequired,
  fontFamily: propTypes.string,
  fontSize: propTypes.string,
  fontWeight: propTypes.string,
};

Title.defaultProps = {
  m: 0,
};
