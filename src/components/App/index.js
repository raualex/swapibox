import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Header from '../Header';
import Nav from '../Nav';
import CardContainer from '../CardContainer';
import { filterCards, getFavorites } from '../Utils/API';
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
    this.getFavorites()
  }

  getCards = async (type) =>  {
    this.setState({ data: [] });
    const data = await filterCards(type);
    const types = ['films', 'people', 'vehicles', 'planets', 'favorites']
    if (types.includes(type)) {
      this.setState({ data });
    } 
  }

  getFavorites = () => {
    const favorites = getFavorites().length
    this.setState({ favorites });
  }

  render() {
    const { data, favorites } = this.state
    return (
      <div>
        <Header />
        <Nav getCards={this.getCards} favorites={favorites} />
     
        <Route path="(/ |/people|/planets|/vehicles|/favorites)" 
            render={() => <CardContainer data={data} getFavorites={this.getFavorites} /> }    
        />

      </div>
    );
  }
}

export default App;
