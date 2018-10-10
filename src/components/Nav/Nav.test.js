import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Nav from '.';

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});