import React from "react";
import "./RadioButton.scss";

const RadioButton = ({ handleOnChange }) => {
  return (
    <div>
      <button onClick={handleOnChange}>High ABV - Above 6%</button>
      <button onClick={handleOnChange}>Classic Range Year's Below 2010</button>
      <button onClick={handleOnChange}>Acidic ph Level below 4.0</button>
    </div>
  );
};

export default RadioButton;

// UPDATED RADIO BUTTON PUNK API NOT RESPONSIVE SO WAIT UNTIL SO THEN IMPLEMENT 


// const RadioButton = ({ handleOnChange }) => {
//   const buttonData = [
//     "High ABV - Above 6%",
//     "Classic Range Year's Below 2010",
//     "Acidic ph Level below 4.0",
//   ];
//   return (
//     <div>
//       {buttonData.map((button) => (
//         <RadioButton text={button} onClick={handleOnChange} />
//       ))}
//     </div>
//   );
// };

