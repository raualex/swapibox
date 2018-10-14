import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Nav from '.';

describe('Nav', () => {
  let wrapper;
  let mockEvent = { target: true, name: 'people' }
  let mockFunction = jest.fn(() => { return true })

  beforeEach(() => {
    wrapper = shallow(<Nav getCards={mockFunction} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fire search func on button click', () => {
    wrapper = mount(<Nav getCards={mockFunction} />)
    
    const spy = spyOn(wrapper.instance(), 'handleClick')
    wrapper.find('.people-btn').simulate('click', mockEvent)
    expect(spy).toHaveBeenCalled()
  });

});