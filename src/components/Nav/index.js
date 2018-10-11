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
    const {isActive} = this.state.isActive

    return (
      <div className="button-container">
        <button 
          name="people"
          className={`people-btn ${isActive === 'people' ? 'selected' : ''}`}
          onClick={this.handleClick}
        >People
        </button>
        <button 
          name="planets"
          className={`planets-btn ${isActive === 'planets' ? 'selected' : ''}`}
          onClick={this.handleClick}
        >Planets</button>
        <button 
          name="vehicles"
          className={`vehicles-btn ${isActive === 'vehicles' ? 'selected' : ''}`}
          onClick={this.handleClick}
        >Vehicles</button>
        <button className="favorites-btn">Favorites</button>
      </div>
    )
  }
}

export default Nav;