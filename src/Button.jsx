import React from "react";

export const Button = ({
  cls,
  label,
  handleOnButtonClick,
  handleOnMouseDown,
  btnStyle,
  isMouseDown,
}) => {
  return (
    <div
      style={isMouseDown === label ? btnStyle : null}
      onMouseDown={() => handleOnMouseDown(label)}
      className={"cbtn " + cls}
      onClick={() => handleOnButtonClick(label)}
    >
      {label}
    </div>
  );
};
