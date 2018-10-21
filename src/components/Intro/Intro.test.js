/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Intro from '.';
import {films} from '../Utils/mockData'

describe('Intro', () => {
  let wrapper;
  let intro = [films.results[0]]

  beforeEach(() => {
    wrapper = shallow(<Intro films={intro} />);
  });


  it('matches the snapshot', () => { 
    const randomNumber = 1
    expect(wrapper).toMatchSnapshot()
  });

});