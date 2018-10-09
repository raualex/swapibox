import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  constructor() {
    super();

    this.state = {

    }
  }


  render() {
    return (
      <div className="button-container">
        <button className="people-btn">People</button>
        <button className="planets-btn">Planets</button>
        <button className="vehicles-btn">Vehicles</button>
        <button className="favorites-btn">Favorites</button>
      </div>
    )
  }
}

export default Nav;