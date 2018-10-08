import React, { Component } from 'react';
import Nav from '../Nav';
import CardContainer from '../CardContainer';
import Intro from '../Intro';

import './App.css';



class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  

  render() {
    return (
      <div>
        <h1>SWAPIbox</h1>
        <Nav />
        <Intro />
        <CardContainer />
      </div>
    );
  }
}

export default App;
