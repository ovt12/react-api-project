import SearchBox from "../../Components/SearchBox/SearchBox";
import "./NavBar.scss";
import { useState } from "react";
import beers from "../../Data/beers";
import CardList from "../../Components/CardList/CardList";
import RadioButton from "../../Components/RadioButton/RadioButton";

const NavBar = ({ searchTerm, handleInput, getBeers}) => {


  return (
    <div className="Nav">
      <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      <RadioButton
        onChange={getBeers}
        options={["High ABV", "Classic", "Acidic: ph < 4"]}
        label={"Select Beer Preference"}
        getBeers={getBeers}
      />
    </div>
  );
};

export default NavBar;
