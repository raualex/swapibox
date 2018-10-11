import React, { Component } from 'react';


class Card extends Component {
  constructor() {
    super()
    this.state = {
      favorite: false
    }
  }

  componentDidMount() {
    const { favorite } = this.props.cardData
    favorite ? this.setState({ favorite }) : null
  }

  render() {
    const { name } = this.props.cardData;
    description = Object.keys(this.props.cardData).map(spec)
    return(
      <div className='card'>
        <img className='character-photo' alt={`${name} photo`}/>
        <div className='card-info'>
          <ul>

          </ul>
        </div>

      </div>
    )
  }
}