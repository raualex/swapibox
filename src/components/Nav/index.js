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
        <div className='button'>
          <NavLink to='/people'
            name="people"
            onClick={this.handleClick}
          >PEOPLE
          </NavLink>
        </div>
        <div className='button'>
          <NavLink to='/planets'
            name="planets"
            onClick={this.handleClick}
          >PLANETS
          </NavLink>
        </div>
        <div className='button'>
          <NavLink to='/vehicles'
            name="vehicles"
            onClick={this.handleClick}
          >VEHICLES
          </NavLink>
        </div>
        <div className='button end'>
          <NavLink to='/favorites'
            name="favorites"
            onClick={this.handleClick}
          >FAVORITES 
            <div className='fav-cont'>
              {favorites}
            </div>
          </NavLink>
        </div>
      </div>
    )
  }
}

Nav.propTypes = {
  getCards: PropTypes.func.isRequired,
  favorites: PropTypes.number.isRequired
}

export default Nav;