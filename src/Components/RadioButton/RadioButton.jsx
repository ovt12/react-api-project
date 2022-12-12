import React from "react";

const RadioButton = ({ handleOnChange }) => {
  return (
    <div>
      <button onClick={handleOnChange}>High ABV</button>
      <button onClick={handleOnChange}>Classic Range</button>
      <button onClick={handleOnChange}>Acidic</button>
    </div>
  );
};

export default RadioButton;
