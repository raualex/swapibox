import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css'

const Intro = ({ intro }) => {
  const randomNumber = Math.round(Math.random() * intro.length) - 1;
  console.log(randomNumber)
  return (
    <div>
      {
        intro &&
      <Crawl
        containerStyles={{background: 'transparent'}}
        textContainerStyles={{height: '200px'}}
        fadeStyles={{minHeight: '50vh', top: '-100px'}}
        title={intro[randomNumber].title.toUpperCase()}
        subTitle={intro[randomNumber].release_date.slice(0, 4)}
        text={intro[randomNumber].opening_crawl}
      />
      }
    </div>
  )
}

export default Intro;