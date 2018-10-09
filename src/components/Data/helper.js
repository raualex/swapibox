export default class StarWarsRepo {
  constructor() {
    this.data = {}
  }

  cleanData = (type) => {
    const data = this.getData(type)
    
    { [type]: data.results }
  }

  getData = (type) => {
    fetch(`https://swapi.co/api/${type}/`)
    .then(response => response.json())
    .then(info => {
      return info
    })
    .catch(error => {
      console.log(error)
    })
  }

};