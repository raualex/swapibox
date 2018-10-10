import React, { Component } from 'react';
import Nav from '../Nav';
import CardContainer from '../CardContainer';
import Header from '../Header';
import Intro from '../Intro';
import * as API from '../Utils/API'

import 'react-star-wars-crawl/lib/index.css'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      intro: [],
      cards: []
    }
  }

  async componentDidMount() {
    this.loadIntro();
  }

  async loadIntro() {
    const intro = await API.getIntro();
    this.setState({intro})
  }

  render() {
    const { intro } = this.state
    return (
      <div>
        <Header />
        <Nav />
        {
          !this.state.cards.length > 0 && 
          <Intro intro={intro}/> 
        }
        {/* <CardContainer /> */}
      </div>
    );
  }
}

export default App;
