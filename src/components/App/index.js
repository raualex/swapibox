import React, { Component } from 'react';

import Header from '../Header';
import Nav from '../Nav';
import Intro from '../Intro';
import CardContainer from '../CardContainer';

import { filterCards } from '../Utils/API';
import './App.css';



class App extends Component {
  constructor() {
    super()
    this.state = {
      films: [],
      cards: []
    }
  }

  componentDidMount() {
    this.getCards('films');
  }

  getCards = async (type) =>  {
    if (type === 'films') {
      const films = await filterCards(type);
      this.setState({ films });
    } else {
      const cards = await filterCards(type);
      this.setState({ cards })
      // console.log(cards)
    }
  }

  render() {
    const { films, cards } = this.state
    return (
      <div>
        <Header />
        <Nav getCards={this.getCards} />
        {
          this.state.cards.length > 0 
          ? <CardContainer cards={cards}/> 
          : <Intro films={films}/>
        }     
      </div>
    );
  }
}

export default App;
