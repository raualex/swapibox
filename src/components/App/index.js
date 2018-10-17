import React, { Component } from 'react';
import Header from '../Header';
import Nav from '../Nav';
import Loading from '../Loading';
import CardContainer from '../CardContainer';
import { filterCards } from '../Utils/API';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      favorites: 0
    }
  }

  componentDidMount() {
    this.getCards('films');
  }

  getCards = async (type) =>  {
    const favorites = filterCards('favorites').length
    this.setState({ data: [], favorites });
    const data = await filterCards(type);
    const types = ['films', 'people', 'vehicles', 'planets', 'favorites']
    if (types.includes(type)) {
      this.setState({ data });
    } 
  }

  render() {
    const { data, favorites } = this.state
    return (
      <div>
        <Header />
        <Nav getCards={this.getCards} favorites={favorites} />
        {
          data.length
            ? <CardContainer data={data} /> 
            : <Loading/>    
        }
      </div>
    );
  }
}

export default App;
