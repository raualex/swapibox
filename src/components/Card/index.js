import React, { Component } from 'react';


class Card extends Component {
  constructor() {
    super()
    this.state = {
      favorite: false
    }
  }

  componentDidMount() {
    this.props.cardData.favorite 
      ? this.setState()
  }
}