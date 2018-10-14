import React from 'react';
import * as APP from './API'
import {films, planets, people, vehicles } from './mockData'

describe('API', () => {

  
  it('should fetch vehicles with correct params', async () => {    
    const expected = "https://swapi.co/api/vehicles"
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(vehicles)
    }))

    await APP.filterCards('vehicles')
    expect(window.fetch).toHaveBeenCalledWith(expected)
  });

  it('should call fetchData with the correct params', async () => {    
    const expected = "https://swapi.co/api/people"
    const mockFunc = jest.fn(() => [])
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(people)
    }))

    await APP.fetchData('people', mockFunc)
    expect(window.fetch).toHaveBeenCalledWith(expected)
  });

  it('should return false if there is no local storage', async () => {    
    const result = APP.checkLocalStorage('people')
    expect(result).toEqual(false)
  });

  it('should return array of correct card types', async () => {    
    
  });

})