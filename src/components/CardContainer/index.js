import React from 'react';
import Card from '../Card'
import Intro from '../Intro'

const CardContainer = ({ data }) => {
  const allCards = data.map(card => <Card key={card.name} cardData={card}/>)
  console.log(data.title)
  return (
    <div>
      { data[0].type &&
      <div className="card-container">
        { allCards }
      </div>
      }
      { data[0].title &&
      <Intro films={data} />
      }
    </div>
  )
}

export default CardContainer;