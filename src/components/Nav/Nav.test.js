import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Nav from '.';

describe('Nav', () => {
  let wrapper;
  let mockFunction = jest.fn((text) => { return text })
  let mockFavorites = []

  beforeEach(() => {
    wrapper = shallow(<Nav getCards={mockFunction} favorites={mockFavorites} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getCards with correct params on people button click', () => {
    wrapper.find('.people-btn').simulate('click')
    expect(mockFunction).toHaveBeenCalledWith('people')
  });

  it('should call getCards with correct params on planets button click', () => {
    wrapper.find('.planets-btn').simulate('click')
    expect(mockFunction).toHaveBeenCalledWith('planets')
  });

  it('should call getCards with correct params on vehicles button click', () => {
    wrapper.find('.vehicles-btn').simulate('click')
    expect(mockFunction).toHaveBeenCalledWith('vehicles')
  });

  it('should call getCards with correct params on favorites button click', () => {
    wrapper.find('.favorites-btn').simulate('click')
    expect(mockFunction).toHaveBeenCalledWith('favorites')
  });

});