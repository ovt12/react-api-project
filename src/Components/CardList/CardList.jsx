import './CardList.scss'
import Card from '../Card/Card';

const CardList = ({data}) => { 
  
return ( data.map(user => {
  return <Card image= {user.image_url} name={user.name} description={user.description} />;
})

)

};

export default CardList