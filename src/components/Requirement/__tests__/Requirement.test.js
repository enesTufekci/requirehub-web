import React from 'react';
import { mount } from 'enzyme';

import Requirement from '../Requirement';
import RequirementForm from '../RequirementForm';

describe('Requirement Component', () => {
  const mockPush = jest.fn();
    const props = {
      createRequirement: jest.fn(),
      history: {
        push: mockPush,
      }
    };
  const wrapper = mount(<Requirement { ...props } />);

  it('should render form', () => {
    expect(wrapper.find(RequirementForm).length).toEqual(1);
  });
  
  it('should push history after form submit', () => {
    const form = wrapper.find(RequirementForm);
    form.props().onSubmit('mock');
    expect(mockPush.mock.calls.length).toBe(1);
  });

});