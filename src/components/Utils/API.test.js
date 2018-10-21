/* eslint-disable */

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
      title: films.results[0].title.toUpperCase(),
      opening_crawl: films.results[0].opening_crawl,
      release_date: films.results[0].release_date.slice(0, 4),
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

  it('get species from fetch call', async () => {
    const expected = ["https://swapi.co/api/species/1/"]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({name: 'graham'})
    }))

    await APP.getSpecies(expected)
    expect(window.fetch).toHaveBeenCalledWith(expected[0])
  });

  it('get people from fetch call', async () => {
    APP.getSpecies = jest.fn(() => true)
    const expected = "https://swapi.co/api/planets/1/"

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(planets.results[0])
    }))

    await APP.getPeople([people.results[0]])
    expect(window.fetch).toHaveBeenCalledWith(expected)
  });

  it('get residents from fetch call', async () => {
    const expected = "https://swapi.co/api/people/5/"
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(people.results[4])
    }))

    await APP.getResidents([planets.results[0].residents[0]])
    expect(window.fetch).toHaveBeenCalledWith(expected)
  });

  it('should return formatted planet data with empty residents array', async () => {
    APP.getResidents = jest.fn(() => true)
    const mockPlanet = { name: "Yavin IV", terrain: "jungle, rainforests", climate: "temperate, tropical", population: "1,000", residents: "none", type: "planets", favorite: false }
    let cleanedPlanet = await APP.getPlanets([planets.results[1]])
    expect(cleanedPlanet).toEqual([mockPlanet])
  });

  it('should return formatted planet data with full residents array', async () => {
    const mockPlanet = { name: "Alderaan", terrain: "grasslands, mountains", climate: "temperate", population: "2,000,000,000", residents: ["Leia Organa", "Leia Organa", "Leia Organa"], type: "planets", favorite: false }
    let cleanedPlanet = await APP.getPlanets([planets.results[0]])
    expect(cleanedPlanet).toEqual([mockPlanet])
  });

  it('get vehicles should return formatted vehilce data', async () => {
    const mockVehicle = { name: "Sand Crawler", model: "Digger Crawler", class: "wheeled", Passengers: "30", type: "vehicles", favorite: false }
    let cleanedVehicle = await APP.getVehicles([vehicles.results[0]])
    expect(cleanedVehicle).toEqual([mockVehicle])    
  });

  it('numberWithCommas func should clean numbers entered in', () => {
    let mockNum = "5,000,000"
    let cleanedNum = APP.numberWithCommas("5000000")
    expect(cleanedNum).toEqual(mockNum)
  });

  it('getFavorites should only return objects with a favorite of true', () => {
    const mockVehicle = { name: "Sand Crawler", model: "Digger Crawler", class: "wheeled", Passengers: "30", type: "vehicles", favorite: false }
    const mockPlanet = { name: "Yavin IV", terrain: "jungle, rainforests", climate: "temperate, tropical", population: "1,000", residents: "none", type: "planets", favorite: false }
    const mockPerson = { name: "Darth Vader", homeworld: "Tatooine", species: "Human", population: "200,000", type: "people", favorite: true }
    localStorage.clear()
    localStorage.setItem('cards', JSON.stringify([mockVehicle, mockPlanet, mockPerson]))
    let favoriteItem = APP.getFavorites()
    expect(favoriteItem).toEqual([mockPerson])
  });

})