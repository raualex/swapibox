import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Nav from '.';

describe('Nav', () => {
  let wrapper;
  let mockFunction = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Nav getCards={mockFunction} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fire people search func on button click', () => {
    let mockEvent = { target: true, name: 'people' }
    let handleClick = jest.fn()

    wrapper.find('.people-btn').simulate('click', mockEvent)
    expect(wrapper.instance().handleClick(mockEvent)).toHaveBeenCalled()
  });

});