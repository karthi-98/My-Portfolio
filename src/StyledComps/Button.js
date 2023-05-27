import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-gradient-to-tr from-gradientyfrom to-yellow rounded-md font-medium  text-black py-3 px-4 text-sm font-jost"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
