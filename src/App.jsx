// App.jsx
import "./App.css";
import Main from "./Containers/Main/Main";
import NavBar from "./Containers/NavBar/NavBar";
import { useState, useEffect } from "react";

const App = () => {
  // used to store the current search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");
  // used to store the list of beers that are displayed on the page
  const [beerList, setBeerList] = useState([]);
  // used to store the minimum alcohol by volume (ABV) of the beers to display
  const [Abv, setAbv] = useState(0);
  // used to store the year range of the classic beers to display
  const [Classic, setClassic] = useState(2022);
  // used to filter the beerList based on the current searchTerm
  const filtered = beerList.filter((user) => {
    const userLowerCase = user.name.toLowerCase();
    return userLowerCase.includes(searchTerm) && user;
  });

  const [Acidic, setAcidic] = useState(filtered)

  // FUNCTION TO GET THE ACIDIC FILTER TARGETS THE DATA ITSELF WITH THERE BEING NO DOCUMENTATION FOR URL
  const getAcidic = () => {
    const phBeer = beerList.filter((beer) => beer.ph < 4);
    setBeerList(phBeer);
  };

  // USES USESTATE TO SET THE URL AS THE DEFAULT TO UPDATE THE BEER LIST
  const getBeers = async (Abv, Classic) => {
    const url = `https://api.punkapi.com/v2/beers?abv_gt=${Abv}&brewed_before=11-${Classic}&per_page=80`;
    const result = await fetch(url);
    const beerData = await result.json();
    setBeerList(beerData);
    console.log(beerList);
  };

  // Whenever search term changes then it runs the effect eg alcohol percentage.
  useEffect(() => {
    getBeers(Abv, Classic);
  }, [Abv, Classic]);

  // FUNCTION TO HANDLE THE SEARCH TERM INPUT
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  // HANDLES THE CLICKS ON THE BUTTONS TO FILTER THROUGH THE DATA
  const handleOnChange = (event) => {
    if (event.target.id === "High ABV" && Abv === 0) {
      return setAbv(6);
    } else if (event.target.id === "High ABV" && Abv === 6) {
      return setAbv(0);
    }
    if (event.target.id === "Classic" && Classic === 2022) {
      return setClassic(2010);
    } else if (event.target.id === "Classic" && Classic === 2010) {
      return setClassic(2022);
    }
    if (event.target.id === "Acidic" && !setAcidic(filtered)) {
      return getAcidic();
    } else if (event.target.id === "Acidic" && getAcidic()) {
      return setAcidic(filtered)
    }
  };

  // The JSX FOR THE APP
  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Punk API</h1>
        <NavBar
          searchTerm={searchTerm}
          handleInput={handleInput}
          handleOnChange={handleOnChange}
        />
        <Main beerApi={filtered} />
      </header>
    </div>
  );
};

export default App;
