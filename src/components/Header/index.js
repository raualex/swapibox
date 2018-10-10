import React from 'react';
import logo from '../Data/assets/logo.svg'

import './Header.css';

const Header = () => {
  
  return (
    <div className="header" >
      <img 
        className='logo' 
        src={logo}
        alt='Swapi Box Logo'
        />
    </div>
  )
}

export default Header;