// App.jsx
import "./App.css";
import Main from "./Containers/Main/Main";
import beers from "./Data/beers"
import NavBar from "./Containers/NavBar/NavBar";
import { useState } from "react";

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [Beers, setBeers] = useState("");


  // const [users, setUsers] = useState([]);

  // const getBeers = async () => {
  //   const url = `https://api.punkapi.com/v2/beers`;
  //   const result = await fetch(url);
  //   const beerData = await result.json();
  //   setBeerList(beerData);
  // };

  // useEffect(() => {
  //   getBeers();
  // }, []);
  // console.log(beerList);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

    const filtered = beers.filter((user) => {
      console.log(user);
      const userLowerCase = user.name.toLowerCase();
      return userLowerCase.includes(searchTerm) && user;
    });

    const handleBeers = (event) => {
      setBeers(event.target.value)
  
    }
    
  


  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Punk API</h1>
        <NavBar searchTerm={searchTerm} handleInput={handleInput} handleBeers={handleBeers}/>
        <Main filtered={filtered}/>
      </header>
    </div>
  );
};

export default App;

