import React from 'react';

import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css'

import './Intro.css';
import loading from '../Utils/assets/loading.svg'


const Intro = ({ film }) => {
  const randomNumber = Math.round(Math.random() * film.length) - 1;
  return (
    <div className='film'>
      {
        randomNumber >= 0 &&
      <Crawl
        containerStyles={{background: 'transparent'}}
        textContainerStyles={{height: '200px', perspective: '375px'}}
        titleStyles={{fontSize: '125%'}}
        fadeStyles={{minHeight: '50vh', top: '-100px'}}
        title={film[randomNumber].title.toUpperCase()}
        subTitle={film[randomNumber].release_date.slice(0, 4)}
        text={film[randomNumber].opening_crawl}
      />
      }
      {
        randomNumber < 0 &&
      <img className='load' 
          src={loading} 
          alt='loading'
          />
      }
    </div>
  )
}

export default Intro;