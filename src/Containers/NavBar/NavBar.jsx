import SearchBox from "../../Components/SearchBox/SearchBox";
import "./NavBar.scss";
import { useState } from "react";
import RadioButton from "../../Components/RadioButton/RadioButton";

const NavBar = ({ searchTerm, handleInput, handleOnChange}) => {


  return (
    <div className="Nav">
      <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      <RadioButton
        handleOnChange={handleOnChange}
      />
    </div>
  );
};

export default NavBar;
