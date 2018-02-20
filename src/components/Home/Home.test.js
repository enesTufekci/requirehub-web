import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';

describe('Home Component', () => {
  const requirements = [
    { id: 1, title: 'Requirement 1'}
  ];
  it('should render new case item correctly', () => {
    const props = {
      requirements: requirements,
    };
    const wrapper = shallow(<Home { ...props }/>);
    expect(wrapper.find('.case-item-new').length).toEqual(1);
    const newCaseItem = wrapper.find('.case-item-new');
    expect(newCaseItem.find('span').length).toEqual(1);
    expect(newCaseItem.find('.circle.black').length).toEqual(1);
  });
  it('should render requirements correctly', () => {
    const props = {
      requirements: requirements,
    };
    const wrapper = shallow(<Home { ...props }/>);
    // +1 is here placeholder element
    expect(wrapper.find('.case-item').length).toEqual(props.requirements.length + 1);
  });
  it('should render addRequirement placeholder correctly', () => {
    let props = {
      requirements: [],
    };
    const homeWithOutRequirements = shallow(<Home { ...props }/>);
    expect(homeWithOutRequirements.find('.case-item-new').find('span').text()).toEqual('My First Requirement');
    props = {
      requirements,
    };
    const homeWithRequirements = shallow(<Home { ...props }/>);
    expect(homeWithRequirements.find('.case-item-new').find('span').text()).toEqual('Create New Requirement');
  });
});