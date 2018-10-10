import React, { Component } from 'react';
import Nav from '../Nav';
import CardContainer from '../CardContainer';
import Header from '../Header';
import Intro from '../Intro';
import StarWarsRepo from '../Data/helper'

import 'react-star-wars-crawl/lib/index.css'

import './App.css';



class App extends Component {
  constructor() {
    super()
    this.state = {
      data: new StarWarsRepo(),
      intro: null
    }
  }

  async componentDidMount() {
    
    const intro = await this.state.data.getIntro();
    this.setState({intro})

    
    // check local storage
    // if (!localStorage.length) {
    // fetch call for intro
    // let introData = this.getData()
    // save call info to localstorage if not already there
    // localStorage.setItem(introData, 'films')
      
    // } else {
    // call and parse localstorage
    // Math.random 1-7 over film array in localstorage and return one of them
    // need keys: title, opening_crawl, release_date
    // set state with that data
      
    // }
  }

  render() {
    const { intro } = this.state
    return (
      <div>
        <Header />
        <Nav />
        {
          this.state.intro &&
        <Intro intro={intro}/>
        }
        {/* <CardContainer /> */}
      </div>
    );
  }
}

export default App;
