import React from "react";

export const Button = ({ cls, label, handleOnButtonClick }) => {
  return (
    <div className={"cbtn " + cls} onClick={() => handleOnButtonClick(label)}>
      {label}
    </div>
  );
};
