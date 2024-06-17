import React from "react";

export const Button = ({ cls, label }) => {
  return <div className={"cbtn " + cls}>{label}</div>;
};
