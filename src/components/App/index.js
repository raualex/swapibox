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
      film: [],
      cards: []
    }
  }

  componentDidMount() {
    this.getCards('films');
  }

  getCards = async (type) =>  {
    if (type === 'films') {
      const film = await filterCards(type);
      this.setState({ film });
    } else {
      const cards = await filterCards(type);
      this.setState({ cards })
    }
  }

  render() {
    const { film } = this.state
    return (
      <div>
        <Header />
        <Nav getCards={this.getCards} />
        {
          !this.state.cards.length > 0 && 
          <Intro film={film}/> 
        }
        {/* <CardContainer /> */}
      </div>
    );
  }
}

export default App;
