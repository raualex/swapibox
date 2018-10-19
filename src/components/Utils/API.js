export const filterCards = async (type) => {
  let result;

  if (checkLocalStorage(type)) {
    return checkLocalStorage(type)
  }

  switch (type) {
    case 'films':
      result = await fetchData(type, getFilms)
      break;
    case 'people':
      result = await fetchData(type, getPeople)
      break;
    case 'planets':
      result = await fetchData(type, getPlanets)
      break;
    case 'vehicles':
      result = await fetchData(type, getVehicles)
      break;
    case 'favorites':
      result = getFavorites();
      break;
    default: updateFavorites(type) 
  }
  return result;
}

export const fetchData = async (type, func) => {
  const response = await fetch(`https://swapi.co/api/${type}`);
  const data = await response.json();
  const results = await func(data.results)
  setLocalStorage(results, type)
  return results  
}

export const checkLocalStorage = (value) => {
  if (localStorage.getItem('cards')) {
    const cards = JSON.parse(localStorage.getItem('cards'))
    const result = cards.filter(card => card.type === value)
    return result.length ? result : false;
  } else {
    return false
  }
}

export const updateFavorites = (name) => {
  const cards = JSON.parse(localStorage.getItem('cards'))
  cards.forEach(card => { 
    if (card.name === name) {
      card.favorite = !card.favorite
    } 
  })
  localStorage.setItem('cards', JSON.stringify(cards))
}

export const setLocalStorage = (data, type) => {
  const cards = JSON.parse(localStorage.getItem('cards')) || []
  const types = cards.filter(card => card.type === type)
  if (!types.length) {
    const result = [...cards, ...data]
    localStorage.setItem('cards', JSON.stringify(result))
    return
  } else {
    return
  }
}

export const getFilms = async (data) => {
  const result = data.map(data => {
    return {
      title: data.title.toUpperCase(),
      opening_crawl: data.opening_crawl,
      release_date: data.release_date.slice(0, 4),
      type: 'films'
    }
  })
  return result;
}

export const getFavorites = () => {
  const cards = JSON.parse(localStorage.getItem('cards')) || []
  const result = cards.filter(card => card.favorite )
  return result
}

export const getPeople = async data => {
  const unresolvedPromises = data.map(async character => {
    const worldResponse = await fetch(character.homeworld)
    const homeworld = await worldResponse.json()
    const species = await getSpecies(character.species)
  
    return { name: character.name,
             homeworld: homeworld.name, 
             species: species.name, 
             population: numberWithCommas(homeworld.population),
             type: 'people',
             favorite: false 
            }
  })
  return Promise.all(unresolvedPromises);
}

export const getSpecies = async species => {
  const response = await fetch(species[0]);
  const result = await response.json()
  return result
}

export const getPlanets = async data => {
  const unresolvedPromises = data.map(async planet => {
    if (planet.residents.length) {
      const residentResponse = await getResidents(planet.residents)  
      return { name: planet.name,
        terrain: planet.terrain,
        climate: planet.climate, 
        population: numberWithCommas(planet.population), 
        residents: residentResponse,
        type: 'planets',
        favorite: false 
       }  
    }
    return { name: planet.name,
             terrain: planet.terrain,
             climate: planet.climate, 
             population: numberWithCommas(planet.population), 
             residents: 'none',
             type: 'planets',
             favorite: false 
            }
  })
  return Promise.all(unresolvedPromises);
}

export const getResidents = async residents => {
  const unresolvedPromises = residents.map(async resident => {
    const response = await fetch(resident)
    const result = await response.json()
    return result.name
  })
  return Promise.all(unresolvedPromises)
}

export const getVehicles = async data => {
  const results = data.map( vehicle => {
    return { 
      name: vehicle.name,
      model: vehicle.model, 
      class: vehicle.vehicle_class, 
      Passengers: vehicle.passengers,
      type: 'vehicles',
      favorite: false 
    }
  })
  return results;
}

export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}