import React from "react";
import "./RadioButton.scss";

const RadioButton = ({ onChange, options, label, getBeers }) => {
  return (
    <div className="radio-buttons">
      <h1>Choose your Preference</h1>
      <input
        type="checkout"
        onChange={onChange}
        options={options}
        label={label}
        getBeers={getBeers}
      />
    </div>
  );
};

export default RadioButton;
