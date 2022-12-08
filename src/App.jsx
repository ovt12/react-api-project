// App.jsx
import "./App.css";
import Main from "./Containers/Main/Main";
import beers from "./Data/beers"
import NavBar from "./Containers/NavBar/NavBar";
import { useState } from "react";

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);

  };

    const filtered = beers.filter((user) => {
      console.log(user);
      const userLowerCase = user.name.toLowerCase();
      return userLowerCase.includes(searchTerm) && user;
    });
    
  

  

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Punk API</h1>
        <NavBar searchTerm={searchTerm} handleInput={handleInput}/>
        <Main filtered={filtered}/>
      </header>
    </div>
  );
};

export default App;

