import React, { Component } from 'react';
import './Card.css'


class Card extends Component {
  constructor() {
    super()
    this.state = {
      favorite: false
    }
  }

  componentDidMount() {
    const { favorite } = this.props.cardData
    return favorite ? this.setState({ favorite }) : null
  }

  render() {
    const { cardData } = this.props
    const { name } = this.props.cardData;
    const description = Object.keys(cardData).map((spec, index) => {
      if (spec !== 'type' && spec !== 'favorite') {
        return <li key={Date.now() + index}>{spec}: {cardData[spec]}</li>
      }
      return ''
    })
    return(
      <div className='card'>
        <img className='character-photo' alt={name}/>
        <div className='card-info'>
          <ul>
            { description }
          </ul>
        </div>
      </div>
    )
  }
}

export default Card;