// import React from 'react';
import * from './API.js';

describe('API', () => {
  
  it('should fire getFilms when filterCards has "films" as a param', () => {
    filterCards('films')
    expect(getFilm()).toHaveBeenCalled()
  });

});