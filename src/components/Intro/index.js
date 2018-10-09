import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css'

const Intro = ({ props }) => {
  
  return (
    <div>
      <Crawl
        containerStyles={{background: 'transparent'}}
        textContainerStyles={{height: '200px'}}
        fadeStyles={{minHeight: '50vh', top: '-100px'}}
        title="Episode IV"
        subTitle="A New Hope"
        text="It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…"
      />
    </div>
  )
}

export default Intro;