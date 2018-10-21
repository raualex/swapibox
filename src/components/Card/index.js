import React, { Component } from 'react';
import './Card.css'
import cardImage from './../Utils/cardImage.js';
import PropTypes from 'prop-types';


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

  updateFavorites = (name, getCards) => {
    this.setState( {favorite: !this.state.favorite} )
    getCards(name)
  }

  render() {
    const { favorite } = this.state;
    const { cardData, getCards } = this.props
    const { name } = this.props.cardData;
    const description = Object.keys(cardData).map((spec, index) => {
      if (spec !== 'type' && spec !== 'name' && spec !== 'favorite' && !Array.isArray(cardData[spec])) {
        return <li key={Date.now() + index}><span>{spec}</span> {cardData[spec]}</li>
      } else if (Array.isArray(cardData[spec])) {
        return <li key={Date.now() + index}><span>{spec}</span> {cardData[spec].join(', ')}</li>
      }
      return '';
    })

    return(
      <div className='card'>
        <div className='image-container'>
          <div onClick={() => this.updateFavorites(name, getCards)}
          className='favorite-btn'
          >
            <img className='star' alt='star' src={`${cardImage[favorite]}`}/>
          </div>
          <img src={`${cardImage[name]}`} alt={name} className='character-pic'/>
        </div>
        <div className='card-info'>
          <h4 className='character-name'>{name.toUpperCase()}</h4>
          <ul>
            { description }
          </ul>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  cardData: PropTypes.object.isRequired,
  getCards: PropTypes.func
}

export default Card;