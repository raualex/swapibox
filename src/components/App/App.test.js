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

  it('loads with the correct state', () => {
    const expected = {
      data: []
    }

    expect(wrapper.state()).toEqual(expected)
  });

  it('fires getCards when mounted', () => {
    wrapper = mount(<App />);
    const spy = spyOn(wrapper.instance(), 'getCards')
    wrapper.instance().getCards()
    expect(spy).toHaveBeenCalled();
  });

});