import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Intro from '.';

describe('Intro', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Intro />);
  });


  it('matches the snapshot', () => { 
    expect(wrapper).toMatchSnapshot()
  });

});