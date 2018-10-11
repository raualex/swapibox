import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from '.';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });


  it('matches the snapshot', () => { 
    expect(wrapper).toMatchSnapshot()
  });

  it('fires loadIntro when mounted', () => {
    wrapper.instance().loadIntro = jest.fn()
    
    expect(wrapper.instance().loadIntro).toHaveBeenCalled();
  });

});