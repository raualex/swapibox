import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './Nav.css';
import PropTypes from 'prop-types';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: ''
    }
  }

  handleClick = (event) => {
    const { name } = event.target
    this.props.getCards(name)
  }

  render() {
    const { favorites } = this.props
    
    return (
      <div className="button-container navbar">
        <NavLink to='/people'
          name="people"
          className='people-btn'
          onClick={this.handleClick}
        >PEOPLE
        </NavLink>
        <NavLink to='/planets'
          name="planets"
          className='planets-btn'
          onClick={this.handleClick}
        >PLANETS
        </NavLink>
         <NavLink to='/vehicles'
          name="vehicles"
          className='vehicles-btn'
          onClick={this.handleClick}
        >VEHICLES
        </NavLink>
        <NavLink to='/favorites'
          name="favorites"
          className='favorites-btn' 
          onClick={this.handleClick}
        >FAVORITES 
          <span>
            {favorites}
          </span>
        </NavLink>
      </div>
    )
  }
}

Nav.propTypes = {
  getCards: PropTypes.func.isRequired,
  favorites: PropTypes.number.isRequired
}

export default Nav;