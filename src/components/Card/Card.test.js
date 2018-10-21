/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Card from '.';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card key={'Luke'} cardData={{name: 'Luke', homeworld: 'Tatooine', residents: ['Leia', 'Lando', 'Dave'], favorite: false }}/>);
  });


  it('matches the snapshot', () => { 
    expect(wrapper).toMatchSnapshot()
  });

  it('loads with the correct state', () => {
    const expected = {
      favorite: false
    }

    expect(wrapper.state()).toEqual(expected)
  });

  it('renders the correct number of lis', () => {
    expect(wrapper.find('ul').children().length).toEqual(2)
  });

});