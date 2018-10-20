import React from 'react';
import { NavLink } from 'react-router-dom'

import logo from '../Utils/assets/logo.svg'

import './Header.css';

const Header = () => {
  
  return (
    <div className="header" >
    <NavLink to=''
        >
        <img 
        className='logo' 
        src={logo}
        alt='Swapi Box Logo'
        />
        </NavLink>
    </div>
  )
}

export default Header; 