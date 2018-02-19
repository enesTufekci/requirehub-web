import React from 'react';
import { shallow } from 'enzyme';

import Home from './index';

describe('Home Component', () => {
  it('should render new case item correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.case-item-new').length).toEqual(1);
    
    const newCaseItem = wrapper.find('.case-item-new');
    expect(newCaseItem.find('input').length).toEqual(1);
    expect(newCaseItem.find('button').length).toEqual(1);
    expect(newCaseItem.find('button').hasClass('circle black')).toBe(true);
    expect(newCaseItem.find('input').props().placeholder).toEqual('My First Requirement');
  });
});