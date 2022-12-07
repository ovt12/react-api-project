import "./Main.scss";
import CardList from "../../Components/CardList/CardList";

const Main = ({data}) => {
  
    return <div className="main-container">
        <CardList data={data}/>
        </div>;
};

export default Main;
