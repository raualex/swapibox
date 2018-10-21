import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from '../Header';
import Nav from '../Nav';
import CardContainer from '../CardContainer';
import { filterCards } from '../Utils/API';

import themeSong from '../Utils/assets/intro.mp3'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      films: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      music: false,
      audio: new Audio(themeSong)
    }
  }

  componentDidMount() {
    let type = window.location.pathname.slice(1) || 'films' 
    this.getCards(type);
    this.getCards('favorites')
    this.toggleMusic()
  }
  
  toggleMusic = async() => {
    await this.setState( { music: !this.state.music } )
    this.state.music ? this.state.audio.play() : this.state.audio.pause();
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
    const { favorites, music } = this.state
    return (
      <div>
        <Header getCards={this.getCards}
          toggleMusic={this.toggleMusic}
          music={music}    
        />
        <Nav getCards={this.getCards} 
          favorites={favorites} 
        />
        <Route path={('/'||'/people'||'/planets'||'/vehicles'||'/favorites')}
          render={() => {
            const type = window.location.pathname.slice(1) || 'films' 
            return <CardContainer data={this.state[type]} getCards={this.getCards} />
            }
          }    
        />
      </div>
    );
  }
}

export default App;
