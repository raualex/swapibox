import React from 'react';
import { NavLink } from 'react-router-dom'

import logo from '../Utils/assets/logo.svg'

import './Header.css';

const Header = ( { getCards }) => {
  
  return (
    <div className="header" >
    <NavLink to=''
        >
        <img 
        className='logo' 
        src={logo}
        alt='Swapi Box Logo'
        onClick={() => getCards('films')}
        />
        </NavLink>
    </div>
  )
}

export default Header; 