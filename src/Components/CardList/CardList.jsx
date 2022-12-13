import "./CardList.scss";
import Card from "../Card/Card";


const CardList = ({beerApi}) => {


  // && is used to display the data when its ready 
  return beerApi && beerApi.map((user) => {
    return (
      <Card
        image={user.image_url}
        name={user.name}
        description={user.description}
        firstBrewed={user.first_brewed}
        ph={user.ph}
        abv={user.abv}
      />
    );
  });
};

export default CardList;
