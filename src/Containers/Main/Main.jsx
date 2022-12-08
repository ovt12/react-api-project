import "./Main.scss";
import CardList from "../../Components/CardList/CardList";

const Main = ({filtered}) => {
  
    return <div className="main-container">
        <CardList className="Nav__card" filtered={filtered}/>
        </div>;
};

export default Main;
