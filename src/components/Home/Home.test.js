import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';

describe('Home Component', () => {
  it('should render new case item correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.case-item-new').length).toEqual(1);
    
    const newCaseItem = wrapper.find('.case-item-new');
    expect(newCaseItem.find('span').length).toEqual(1);
    expect(newCaseItem.find('.circle.black').length).toEqual(1);
  });
});