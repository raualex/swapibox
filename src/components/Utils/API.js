export const filterCards = async (type) => {
  let result;
  if (checkLocalStorage(type)) {
    return checkLocalStorage(type)
  } else if (type === 'films') {
    result = await fetchData(type, getFilm)
  } else if (type === 'people') {
    result = await fetchData(type, getPeople)
  } else if (type === 'planets') {
    result = await fetchData(type, getPlanets)
  } else if (type === 'vehicles') {
    result = await fetchData(type, getVehicles)
  } else {
    result = updateFavorites(type)
  }
  return result;
}

export const fetchData = async (url, func) => {
  const response = await fetch(`https://swapi.co/api/${url}`);
  const data = await response.json();
  const results = await func(data.results)
  return results  
}


export const checkLocalStorage = (value) => {
  if (localStorage.getItem('cards')) {
    const cards = JSON.parse(localStorage.getItem('cards'))
    const result = cards.filter(card => {
      if (value === 'favorite') {
        return card.favorite === true
      } else {
        return card.type === value
      }
    })
    return result.length > 0 ? result : false;
  } else {
    return false
  }
}

export const updateFavorites = (name) => {
  const cards = JSON.parse(localStorage.getItem('cards'))
  cards.forEach(card => { 
    return card[name] ? card.favorite = !card.favorite : '' 
  })
  localStorage.setItem('cards', JSON.stringify(cards))
}

export const getFilm = async (data) => {
  return data;
}

export const getPeople = async data => {
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
             favorite: false }
  })
  return Promise.all(unresolvedPromises);
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

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getVehicles = async data => {
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



// return { name: planet.name,
//   terrain: planet.terrain,
//   climate: planet.climate, 
//   population: planet.population, 
//   residents: 'none',
//   type: 'planets',
//   favorite: false 
//  }

