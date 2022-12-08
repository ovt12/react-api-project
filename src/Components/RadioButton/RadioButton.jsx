import React from "react";
import "./RadioButton.scss";

const RadioButton = ({ onChange, options, label }) => {
  return (
    <div className="radio-buttons">
        <h1>Choose your Preference</h1>
      <input type="radio" label={label} options={options} onChange={onChange} />
      
    </div>
  );
};

export default RadioButton;
