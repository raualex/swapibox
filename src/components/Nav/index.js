import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

import './Nav.css';

const Nav = ( { favorites, getCards } ) => {
const favNumber = favorites.length && favorites[0].type !== 'none'
  ? favorites.length
  : 0

  return (
    <div className="button-container navbar">
      <div className='button'>
        <NavLink to='/people'
          name="people"
          className='people-btn'
          onClick={() => getCards("people")}
        >PEOPLE
        </NavLink>
      </div>
      <div className='button'>
        <NavLink to='/planets'
          name="planets"
          className='planets-btn'
          onClick={() => getCards("planets")}
        >PLANETS
        </NavLink>
      </div>
      <div className='button'>
        <NavLink to='/vehicles'
          name="vehicles"
          className='vehicles-btn'
          onClick={() => getCards("vehicles")}
        >VEHICLES
        </NavLink>
      </div>
      <div className='button end'>
        <NavLink to='/favorites'
          name="favorites"
          className='favorites-btn'
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