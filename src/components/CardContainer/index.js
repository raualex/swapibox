import React from 'react';
import Card from '../Card'

const CardContainer = ({ cards }) => {
  const allCards = cards.map(card => <Card key={card.name} cardData={card}/>)
  return (
    <div className="card-container">
      { allCards }
    </div>
  )
}

export default CardContainer;