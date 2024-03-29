import React from 'react';
import ContainerWrapper from './styles';


const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  mobileGutter,
  width,
  color,
  bg
}) => {
  // Add all classs to an array
  const addAllClasses = ['container'];
  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ContainerWrapper
      className={addAllClasses.join(' ')}
      fullWidth={fullWidth}
      noGutter={noGutter}
      width={width}
      mobileGutter={mobileGutter}
      color={color}
      background={bg}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;
