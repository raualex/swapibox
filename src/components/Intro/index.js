import React from 'react';
import './Intro.css';
import PropTypes from 'prop-types';

const Intro = ({ films }) => {
  const randomNumber = Math.round(Math.random() * films.length) + 1;
  console.log(films[randomNumber])
  return (
    <div>
    {
      films[randomNumber] !== undefined &&
      <div>
        <div className="fade"></div>
          <section className="star-wars">
            <div className="crawl">
              <div className="title">
                <h1>{films[randomNumber].title}</h1>
                <p>{films[randomNumber].release_date}</p> 
              </div>
              <p>{films[randomNumber].opening_crawl}</p>  
            </div>
          </section>
      </div>
      }
    </div>
  )
}

Intro.propTypes = {
  films: PropTypes.array.isRequired
}

export default Intro;