// App.jsx
import "./App.css";
import Main from "./Containers/Main/Main";
import beers from "./Data/beers"
import NavBar from "./Containers/NavBar/NavBar";
import { useState } from "react";

const App = () => {

  

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Punk API</h1>
        <NavBar data={beers}/>
        <Main data={beers}/>
      </header>
    </div>
  );
};

export default App;

