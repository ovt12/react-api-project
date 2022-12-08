import SearchBox from '../../Components/SearchBox/SearchBox';
import './NavBar.scss'
import { useState } from 'react';
import beers from '../../Data/beers';
import CardList from '../../Components/CardList/CardList';

const NavBar = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState("")


  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);



    const filtered = beers.filter((user) => {
      console.log(user);
      const userLowerCase = user.name.toLowerCase();
      return userLowerCase.includes(searchTerm) && user;
    });
    
    setFiltered(filtered);
  };


  return ( 
  <div className='Nav'>
    <SearchBox handleInput={handleInput}/>
    <CardList className="Nav__card" data={filtered.length > 0 ? filtered : beers}/>
  </div>
  );

};

export default NavBar;