import React from 'react';
import { mount } from 'enzyme';

import Requirement from '../Requirement';
import RequirementForm from '../RequirementForm';

describe('Requirement Component', () => {
  it('should render form', () => {
    const wrapper = mount(<Requirement />);
    expect(wrapper.find(RequirementForm).length).toEqual(1);
  });
});