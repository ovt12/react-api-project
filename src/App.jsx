// App.jsx
import "./App.css";
import Main from "./Containers/Main/Main";
import beers from "./Data/beers"
import SearchBox from "./Components/SearchBox/SearchBox";
import NavBar from "./Containers/NavBar/NavBar";
import CardList from "./Components/CardList/CardList";

const App = () => {
  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Punk API</h1>
        <NavBar/>
      <Main data={beers}/>
      </header>
    </div>
  );
};

export default App;

