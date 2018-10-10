export default class StarWarsRepo {
  constructor() {
    this.allData = {
      intro: [],
      cards: []
    }
  }

  // cleanData = (type) => {
  //   const data = this.getData(type)
    
  //   { [type]: data.results }
  // }


  async getIntro() {
    const url = 'films'
    const result = await this.fetchData(url)  
    return result;
  }


  fetchData = async (url, func = null) => {
    const response = await fetch(`https://swapi.co/api/${url}/`);
    const intro = await response.json();
    return intro.results;
   
  }


  getPeople() {

  }




  // getData = (type) => {
  //   fetch(`https://swapi.co/api/${type}/`)
  //   .then(response => response.json())
  //   .then(info => {
  //     return info
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

};