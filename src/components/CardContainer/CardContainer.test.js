import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardContainer from '.';
import Card from '../Card'

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer data={[{name: 'Luke', type: 'people'},{name: 'Lando'},{name: 'R2-D2'}]} />);
  });


  it('matches the snapshot', () => { 
    expect(wrapper).toMatchSnapshot()
  });

  it('renders appropriate number of cards', () => {
    expect(wrapper.find(Card).length).toEqual(3)
  });

});