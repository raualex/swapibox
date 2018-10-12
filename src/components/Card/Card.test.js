import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from '.';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card key={'card1'} cardData={[{name: 'Lando'}]} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})
