import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  getPeople = (type) => {
    // event.preventDefault()
    this.props.getCards(type)
  }

  render() {
    return (
      <div className="button-container">
        <button 
          name="people"
          className="people-btn"
          onClick={(event) => this.getPeople(event.target.name)}
        >People
        </button>
        <button className="planets-btn">Planets</button>
        <button className="vehicles-btn">Vehicles</button>
        <button className="favorites-btn">Favorites</button>
      </div>
    )
  }
}

export default Nav;