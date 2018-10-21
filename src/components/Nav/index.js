import React from 'react';
import { NavLink } from 'react-router-dom'

import './Nav.css';
import PropTypes from 'prop-types';

const Nav = ( { favorites, getCards } ) => {
const favNumber = favorites.length && favorites[0].type !== 'none'
  ? favorites.length
  : 0

  return (
    <div className="button-container navbar">
      <div className='button'>
        <NavLink to='/people'
          name="people"
          onClick={() => getCards("people")}
        >PEOPLE
        </NavLink>
      </div>
      <div className='button'>
        <NavLink to='/planets'
          name="planets"
          onClick={() => getCards("planets")}
        >PLANETS
        </NavLink>
      </div>
      <div className='button'>
        <NavLink to='/vehicles'
          name="vehicles"
          onClick={() => getCards("vehicles")}
        >VEHICLES
        </NavLink>
      </div>
      <div className='button end'>
        <NavLink to='/favorites'
          name="favorites"
          onClick={() => getCards("favorites")}
        >FAVORITES 
          <div className='fav-cont'>
            {favNumber}
          </div>
        </NavLink>
      </div>
    </div>
  ) 
}

Nav.propTypes = {
  getCards: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
}

export default Nav;