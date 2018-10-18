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
    this.setState({
      isActive: name
    }, () => this.props.getCards(this.state.isActive))
  }

  render() {
   
    const { favorites } = this.props

    return (
      <div className="button-container navbar">
        <NavLink to='/people'>
          <button 
            name="people"
            className='people-btn'
            onClick={this.handleClick}
          >PEOPLE
          </button>
        </NavLink>
        <NavLink to='/planets'>
          <button 
            name="planets"
            className='planets-btn'
            onClick={this.handleClick}
          >PLANETS</button>
        </NavLink>
         <NavLink to='/vehicles'>
          <button 
            name="vehicles"
            className='vehicles-btn'
            onClick={this.handleClick}
          >VEHICLES</button>
        </NavLink>
         <NavLink to='/favorites'>
          <button 
            name="favorites"
            className='favorites-btn' 
            onClick={this.handleClick}>FAVORITES 
              <span>
                {favorites}
              </span>
          </button>
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