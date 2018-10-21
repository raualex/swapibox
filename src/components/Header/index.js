import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';


import logo from '../Utils/assets/logo.svg'

import './Header.css';

const Header = ( { getCards, toggleMusic, music }) => {
  
  return (
    <div className="header" >
    <NavLink to=''>
      <img 
      className='logo' 
      src={logo}
      alt='Swapi Box Logo'
      onClick={() => getCards('films')}
    />
    </NavLink>
    <button
      className='music'
      onClick={() => toggleMusic()}
    >{music ? 'Pause Music' : 'Play Music'}
    </button>
    </div>
  )
}

Header.propTypes = {
  getCards: PropTypes.func,
  toggleMusic: PropTypes.func,
  music: PropTypes.bool
}

export default Header; 