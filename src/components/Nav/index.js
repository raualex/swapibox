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
          className={`btn ${isActive === 'people' ? 'selected' : ''}`}
          onClick={this.handleClick}
        >People
        </button>
        <button 
          name="planets"
          className={`btn ${isActive === 'planets' ? 'selected' : ''}`}
          onClick={this.handleClick}
        >Planets</button>
        <button 
          name="vehicles"
          className={`btn ${isActive === 'vehicles' ? 'selected' : ''}`}
          onClick={this.handleClick}
        >Vehicles</button>
        <button className="btn">Favorites</button>
      </div>
    )
  }
}

export default Nav;