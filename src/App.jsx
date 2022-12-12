// App.jsx
import "./App.css";
import Main from "./Containers/Main/Main";
import NavBar from "./Containers/NavBar/NavBar";
import { useState, useEffect} from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // can use filter.map with array in there
  const [beerList, setBeerList] = useState([])

  const [Abv, setAbv] = useState(0)
  const [Classic, setClassic] = useState(2022)



  const filtered = beerList.filter((user) => {
    const userLowerCase = user.name.toLowerCase();
    return userLowerCase.includes(searchTerm) && user;
  });

  const getAcidic = () => {
    const phBeer = beerList.filter((beer) => beer.ph < 4) 
      setBeerList(phBeer)}


  // const filterAcidic = beerList.filter((beer) => {
  //     const phBeer = beer.ph < 4;
  //     console.log(phbeer);
  //     setAcidic(phBeer)
  // });
  

  const getBeers = async (Abv, Classic) => {

    const url = `https://api.punkapi.com/v2/beers?abv_gt=${Abv}&brewed_before=11-${Classic}`
    const result = await fetch(url);
    const beerData = await result.json();
    setBeerList(beerData);
    console.log(beerList);
  };

  useEffect(() => {
    getBeers(Abv, Classic);
    // Whenever search term changes then it runs the effect eg alcohol percentage.
  }, [Abv, Classic]);
  

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };  

const handleOnChange = (event) => {
  if (event.target.innerText === "High ABV")  {
    return setAbv(6)
  } if (event.target.innerText === "Classic Range") {
    return setClassic(2010)
  } if (event.target.innerText === "Acidic") {
    return getAcidic()
  }
};




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
