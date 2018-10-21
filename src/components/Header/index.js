import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';


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

Header.propTypes = {
  getCards: PropTypes.func
}

export default Header; 