import React from 'react';
import Card from '../Card'
import Intro from '../Intro'

const CardContainer = ({ data }) => {
  const allCards = data.map(card => <Card key={card.name} cardData={card}/>)
  return (
    <div>
      { data[0].type !== 'films' &&
      <div className="card-container">
        { allCards }
      </div>
      }
      { data[0].type === 'films' &&
      <Intro films={data} />
      }
    </div>
  )
}

export default CardContainer;