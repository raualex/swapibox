import React from 'react';

import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css'

import './Intro.css';


const Intro = ({ films }) => {
  const randomNumber = Math.round(Math.random() * films.length) - 1;
  return (
    <div className='films'>
      {
        randomNumber >= 0 &&
      <Crawl
        containerStyles={{background: 'transparent'}}
        textContainerStyles={{height: '200px', perspective: '375px'}}
        titleStyles={{fontSize: '165%'}}
        fadeStyles={{minHeight: '50vh', top: '-100px'}}
        title={films[randomNumber].title.toUpperCase()}
        // subTitle={films[randomNumber].release_date.slice(0, 4)}
        text={films[randomNumber].opening_crawl}
      />
      }
    </div>
  )
}

export default Intro;