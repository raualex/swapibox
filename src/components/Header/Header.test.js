/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';

describe('Header', () => {
  
  it('matches the snapshot', () => {
    let wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });

});