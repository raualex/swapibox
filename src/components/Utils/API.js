export const filterCards = async (type) => {
  let result;
  if (checkLocalStorage(type)) {
    return checkLocalStorage(type)
  } else if (type === 'films') {
    result = await fetchData(type, getFilm)
  } else if (type === 'people') {
    result = await fetchData(type, getPeople)
  } else {
    result = updateFavorites(type)
  }
  return result;
}

const fetchData = async (url, func) => {
  const response = await fetch(`https://swapi.co/api/${url}`);
  const data = await response.json();
  const results = await func(data.results)
  return results  
}


const checkLocalStorage = (value) => {
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

const updateFavorites = (name) => {
  const cards = JSON.parse(localStorage.getItem('cards'))
  cards.forEach(card => { 
    return card[name] ? card.favorite = !card.favorite : '' 
  })
  localStorage.setItem('cards', JSON.stringify(cards))
}

const getFilm = async (data) => {
  return data;
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
             population: homeworld.population,
             type: 'people',
             favorite: false }
  })
  return Promise.all(unresolvedPromises);
}


