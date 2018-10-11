import React, { Component } from 'react';
import Nav from '../Nav';
import CardContainer from '../CardContainer';
import Header from '../Header';
import Intro from '../Intro';
import * as API from '../Utils/API';

import 'react-star-wars-crawl/lib/index.css';
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
      const film = await API.filterCards(type);
      this.setState({ film });
    } else {
      const cards = await API.filterCards(type);
      console.log(cards)
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
