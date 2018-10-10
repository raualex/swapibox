import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '.';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });


  it('matches the snapshot', () => { 
    expect(wrapper).toMatchSnapshot()
  });

  it('renders nav and card container children components', () => {
    
  })

});