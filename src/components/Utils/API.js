export const filterCards = async (type) => {
  let result;
  switch (type) {
    case checkLocalStorage(type):
      result = checkLocalStorage(type)
      break;
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

const fetchData = async (url, func) => {
  const response = await fetch(`https://swapi.co/api/${url}`);
  const data = await response.json();
  const results = await func(data.results)
  setLocalStorage(results)
  return results  
}

const checkLocalStorage = (value) => {
  if (localStorage.getItem('cards')) {
    const cards = JSON.parse(localStorage.getItem('cards'))
    const result = cards.filter(card => card.type === value)
    console.log(result)
    return result.length ? result : false;
  } else {
    return false
  }
}

const updateFavorites = (name) => {
  const cards = JSON.parse(localStorage.getItem('cards'))
  cards.forEach(card => { 
    return card[name] ? card.favorite = !card.favorite : '' 
  })
  localStorage.setItem('cards', JSON.stringify(cards))
}

const setLocalStorage = (data) => {
  const cards = JSON.parse(localStorage.getItem('cards'))
  if (cards) {
    const result = [...cards, ...data]
    localStorage.setItem('cards', JSON.stringify(result))
    return
  } else {
    localStorage.setItem('cards', JSON.stringify(data))
    return
  }
}

const getFilms = async (data) => {
  const result = data.map(data => {
    return {
      title: data.title,
      opening_crawl: data.opening_crawl,
      type: 'films'
    }
  })
  return result;
}

const getFavorites = () => {
  const cards = JSON.parse(localStorage.getItem('cards'))
  const result = cards.filter(card => card.favorite )
  return result
}

const getPeople = async data => {
  const unresolvedPromises = data.map(async character => {
    const worldResponse = await fetch(character.homeworld)
    const homeworld = await worldResponse.json()
    const speciesResponse = await fetch(character.species)
    const species = await speciesResponse.json()

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

const getPlanets = async data => {
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

const getResidents = async residents => {
  const unresolvedPromises = residents.map(async resident => {
    const response = await fetch(resident)
    const result = await response.json()
    return result.name
  })
  return Promise.all(unresolvedPromises)
}

const getVehicles = async data => {
  const results = data.map( vehicle => {
    return { 
      name: vehicle.name,
      model: vehicle.model, 
      class: vehicle.vehicle_class, 
      Passengers: vehicle.passengers,
      type: 'vehicle',
      favorite: false 
    }
  })
  return results;
}

const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
