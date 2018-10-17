import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Nav from '.';

describe('Nav', () => {
  let wrapper;
  let mockFunction = jest.fn(() => { return true })

  beforeEach(() => {
    wrapper = shallow(<Nav getCards={mockFunction} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on people button click', () => {
    let expectedState = { isActive: 'people' }
    let mockEvent = { target: { name: 'people' } }
    wrapper.setState({ isActive: '' })
    wrapper.find('.people-btn').simulate('click', mockEvent)
    expect(wrapper.state()).toEqual(expectedState)
  });

  it('should update state on planets button click', () => {
    let expectedState = { isActive: 'planets' }
    let mockEvent = { target: { name: 'planets' } }
    wrapper.setState({ isActive: '' })
    wrapper.find('.planets-btn').simulate('click', mockEvent)
    expect(wrapper.state()).toEqual(expectedState)
  });

  it('should update state on vehicles button click', () => {
    let expectedState = { isActive: 'vehicles' }
    let mockEvent = { target: { name: 'vehicles' } }
    wrapper.setState({ isActive: '' })
    wrapper.find('.vehicles-btn').simulate('click', mockEvent)
    expect(wrapper.state()).toEqual(expectedState)
  });

  it('should update state on favorites button click', () => {
    let expectedState = { isActive: 'favorites' }
    let mockEvent = { target: { name: 'favorites' } }
    wrapper.setState({ isActive: '' })
    wrapper.find('.favorites-btn').simulate('click', mockEvent)
    expect(wrapper.state()).toEqual(expectedState)
  });

});