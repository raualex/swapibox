import React, { Component } from 'react';
import './Nav.css';

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
          onClick={this.handleClick}>FAVORITES</button>
      </div>
    )
  }
}

export default Nav;