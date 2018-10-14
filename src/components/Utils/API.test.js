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
    const cards = [{ name: 'harry', type: 'people' },
    { name: 'rover', type: 'vehicles' },
    { name: 'zonie', type: 'planets' }] 
    localStorage.setItem('cards', JSON.stringify(cards))

    const expected = [cards[1]];
    const result = APP.checkLocalStorage('vehicles')

    expect(result).toEqual(expected)
  });

  it('should return array of cleaned films', async () => { 
    const cards = [films.results[0]]
    const expected = [{
      title: films.results[0].title,
      opening_crawl: films.results[0].opening_crawl,
      type: 'films'
    }]

    const result = await APP.getFilms(cards)
    expect(result).toEqual(expected)
  });

  it('find and change the favorite boolean to update favorites', async () => {   
    const cards = [{ name: 'harry', type: 'people', favorite: false },
    { name: 'rover', type: 'vehicles', favorite: false },
    { name: 'zonie', type: 'planets', favorite: false }] 
    localStorage.setItem('cards', JSON.stringify(cards))

    const expected = [{ name: 'harry', type: 'people', favorite: true },
    { name: 'rover', type: 'vehicles', favorite: false },
    { name: 'zonie', type: 'planets', favorite: false }] 
    
    APP.updateFavorites('harry')

    expect(JSON.parse(localStorage.getItem('cards'))).toEqual(expected)
  });

  it('should set local storage', async () => {   
    const cards = [{ name: 'harry', type: 'people', favorite: false },
    { name: 'zonie', type: 'planets', favorite: false }] 

    const expected = [{ name: 'harry', type: 'people', favorite: false },
    { name: 'zonie', type: 'planets', favorite: false },
    { name: 'rover', type: 'vehicles', favorite: false }]
    localStorage.setItem('cards', JSON.stringify(cards))


    const data = [{ name: 'rover', type: 'vehicles', favorite: false }]
    APP.setLocalStorage(data, 'vehicles')

    expect(JSON.parse(localStorage.getItem('cards'))).toEqual(expected)
  });


  it('get people from fetch call', async () => {   
    const cards = [{ name: 'harry', type: 'people', favorite: false },
    { name: 'zonie', type: 'planets', favorite: false }] 

    const expected = [{ name: 'harry', type: 'people', favorite: false },
    { name: 'zonie', type: 'planets', favorite: false },
    { name: 'rover', type: 'vehicles', favorite: false }]
    localStorage.setItem('cards', JSON.stringify(cards))


    const data = [{ name: 'rover', type: 'vehicles', favorite: false }]
    APP.setLocalStorage(data, 'vehicles')

    expect(JSON.parse(localStorage.getItem('cards'))).toEqual(expected)
  });



})