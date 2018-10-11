import React from 'react';

const CardContainer = ({ cards }) => {
  allCards = cards.map(card => <Card key={card.name} card={card}/>)
  return (
    <div className="card-container">
      { allCards }
    </div>
  )
}

export default CardContainer;