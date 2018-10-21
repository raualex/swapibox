/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { people } from '../Utils/mockData'
import App from '.';
import { MemoryRouter } from 'react-router-dom';

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
      films: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: [{'type': 'none'}]
    }

    expect(wrapper.state()).toEqual(expected)
  });

  it('getCards should set state if type isn\'t favorite', async () => {
    wrapper.filterCards = jest.fn((type) => { return people.results })
    await wrapper.instance().getCards('people')
    expect(wrapper.state()).not.toEqual({ data: [] })
  });

  it('fires getCards when mounted', () => {
    wrapper = mount(<MemoryRouter><App /></MemoryRouter>);
    let wrapperApp = wrapper.find(App)
    const spy = spyOn(wrapperApp.instance(), 'getCards')
    wrapperApp.instance().getCards()
    expect(spy).toHaveBeenCalled();
  });

});