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
      <div>
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
        <button>Favorites</button>
      </div>
    )
  }
}

export default Nav;