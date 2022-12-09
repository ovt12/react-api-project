import "./Main.scss";
import CardList from "../../Components/CardList/CardList";

const Main = ({filtered, beerApi}) => {
  
    return <div className="main-container">
        <CardList className="Nav__card" filtered={filtered} beerApi={beerApi}/>
        </div>;
};

export default Main;
