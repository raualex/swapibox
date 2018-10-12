import React from 'react';

import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css'

import './Intro.css';
import loading from '../Utils/assets/loading.svg'


const Intro = ({ films }) => {
  const randomNumber = Math.round(Math.random() * films.length) - 1;
  return (
    <div className='films'>
      {
        randomNumber >= 0 &&
      <Crawl
        containerStyles={{background: 'transparent'}}
        textContainerStyles={{height: '200px', perspective: '375px'}}
        titleStyles={{fontSize: '125%'}}
        fadeStyles={{minHeight: '50vh', top: '-100px'}}
        title={films[randomNumber].title.toUpperCase()}
        subTitle={films[randomNumber].release_date.slice(0, 4)}
        text={films[randomNumber].opening_crawl}
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