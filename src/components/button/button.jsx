import React from "react";
import "./button.css";

// THIS FUNCTION CHECKS IF THE VALUE IN THE BUTTON IS AN OPERTAOR OR A STRING
const checkIfOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = props => (
  <div
    className={`button_wrapper ${
      checkIfOperator(props.children) ? null : "operators"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);
