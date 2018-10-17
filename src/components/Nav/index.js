import React, { Component } from 'react';
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
    const {isActive} = this.state
    const { favorites } = this.props

    return (
      <div className="button-container navbar">
        <button 
          name="people"
          className={`people-btn ${isActive === 'people' ? 'selected' : ''}`}
          onClick={this.handleClick}
        >PEOPLE
        </button>
        <button 
          name="planets"
          className={`planets-btn ${isActive === 'planets' ? 'selected' : ''}`}
          onClick={this.handleClick}
        >PLANETS</button>
        <button 
          name="vehicles"
          className={`vehicles-btn ${isActive === 'vehicles' ? 'selected' : ''}`}
          onClick={this.handleClick}
        >VEHICLES</button>
        <button 
          name="favorites"
          className="favorites-btn" 
          onClick={this.handleClick}>FAVORITES 
            <span>
              {favorites ? favorites : '' }
            </span>
        </button>
      </div>
    )
  }
}

Nav.propTypes = {
  getCards: PropTypes.func.isRequired
}

export default Nav;