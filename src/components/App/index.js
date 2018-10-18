import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'

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
    let type = this.props.location.pathname.slice(1) || 'films' 
    this.getCards(type);
    this.getFavorites()
  }

  updateCards = () => {
    let type = this.props.location.pathname.slice(1) || 'films' 
    if (this.state.data.length && type !== this.state.data[0].type) {
      this.getCards(type)
    } else {
      return null;
    }
  }

  getCards = async (type) =>  {
    await this.setState({ data: [] });
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
    this.updateCards();
    return (
      <div>
        <Header />
        <Nav getCards={this.getCards} favorites={favorites} />
        <Route path={('/'||'/people'||'/planets'||'/vehicles'||'/favorites')}
          render={() => {
            return <CardContainer data={data} getFavorites={this.getFavorites} />
          }}    
        />
      </div>
    );
  }
}

export default withRouter(App);
