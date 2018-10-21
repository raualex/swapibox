import React from 'react';

import Loading from '../Loading';
import Card from '../Card'
import Intro from '../Intro'
import NoFavs from '../NoFavs'
import './CardContainer.css'
import PropTypes from 'prop-types';

const CardContainer = ({ data, getCards }) => {
  if (!data.length) {      
    return (<Loading />)
  } else if (data[0].type === 'none') {
    return (<NoFavs />)
  }

  const allCards = data.map(card => <Card key={card.name} cardData={card} getCards={getCards}/>)
  return (
    <div className='card-container'>
      { data[0].type !== 'films' &&
        <div className='card-container'>
        { allCards }
        </div>
      }
      { data[0].type === 'films' &&
      <Intro films={data} />
      }
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.array.isRequired,
  getCards: PropTypes.func.isRequired
}

export default CardContainer;