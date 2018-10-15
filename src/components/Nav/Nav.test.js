import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Nav from '.';

describe('Nav', () => {
  let wrapper;
  let mockEvent = { target: { name: 'people' } }
  let mockFunction = jest.fn(() => { return true })

  beforeEach(() => {
    wrapper = shallow(<Nav getCards={mockFunction} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on button click', () => {
    let expectedState = { isActive: 'people' }
    wrapper.setState({ isActive: '' })
    wrapper.find('.people-btn').simulate('click', mockEvent)
    expect(wrapper.state()).toEqual(expectedState)
  });

});