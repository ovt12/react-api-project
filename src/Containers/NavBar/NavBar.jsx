import SearchBox from '../../Components/SearchBox/SearchBox';
import './NavBar.scss'
import { useState } from 'react';
import beers from '../../Data/beers';
import CardList from '../../Components/CardList/CardList';

const NavBar = ({searchTerm, handleInput}) => {

 
  return ( 
  <div className='Nav'>
    <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>
  </div>
  );

};

export default NavBar;