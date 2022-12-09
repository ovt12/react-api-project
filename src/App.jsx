// App.jsx
import "./App.css";
import Main from "./Containers/Main/Main";
import beers from "./Data/beers";
import NavBar from "./Containers/NavBar/NavBar";
import { useState, useEffect} from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // can use filter.map with array in there
  const [beerList, setBeerList] = useState([])

  const filtered = beerList.filter((user) => {
    const userLowerCase = user.name.toLowerCase();
    return userLowerCase.includes(searchTerm) && user;
  });
  


  const getBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers`;
    const result = await fetch(url);
    const beerData = await result.json();
    setBeerList(beerData);
    console.log(beerList);
  };

  useEffect(() => {
    getBeers();
    // Whenever search term changes then it runs the effect eg alcohol percentage.
  }, [searchTerm]);
  

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };



  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Punk API</h1>
        <NavBar
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
        <Main beerApi={filtered} />
      </header>
    </div>
  );
};

export default App;
