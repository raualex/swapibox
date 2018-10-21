/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Loading from '.';

describe('Loading', () => {
  
  it('matches the snapshot', () => {
    let wrapper = shallow(<Loading />);

    expect(wrapper).toMatchSnapshot();
  });

});