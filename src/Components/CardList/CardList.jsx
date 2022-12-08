import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({ filtered }) => {
  return filtered.map((user) => {
    return (
      <Card
        image={user.image_url}
        name={user.name}
        description={user.description}
        firstBrewed={user.first_brewed}
        ph={user.ph}
      />
    );
  });
};

export default CardList;
