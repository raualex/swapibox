import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'

import Header from '../Header';
import Nav from '../Nav';
import CardContainer from '../CardContainer';
import { filterCards } from '../Utils/API';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      films: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    }
  }

  componentDidMount() {
    let type = this.props.location.pathname.slice(1) || 'films' 
    this.getCards(type);
    this.getCards('favorites')
  }

  getCards = async (type) =>  {
    const data = await filterCards(type);
    const types = ['films', 'people', 'vehicles', 'planets', 'favorites']
    if (types.includes(type)) {
      this.setState({ [type]: data });
    } else {
      const favorites = await filterCards('favorites');
      this.setState( { favorites } )
    }
  }

  render() {
    const { favorites } = this.state
    return (
      <div>
        <Header getCards={this.getCards} />
        <Nav getCards={this.getCards} favorites={favorites} />
        <Route path={('/'||'/people'||'/planets'||'/vehicles'||'/favorites')}
          render={({location}) => {
            const type = location.pathname.slice(1) || 'films' 
            return <CardContainer data={this.state[type]} getCards={this.getCards} />
            }
          }    
        />
      </div>
    );
  }
}

export default withRouter(App);
