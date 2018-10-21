import React from 'react';
import { shallow } from 'enzyme';
import NoFavs from '.';

describe('NoFavs', () => {
  
  it('matches the snapshot', () => {
    let wrapper = shallow(<NoFavs />);

    expect(wrapper).toMatchSnapshot();
  });

});