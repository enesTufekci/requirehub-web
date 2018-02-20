import React from 'react';
import { shallow } from 'enzyme';

import RequirementForm from '../RequirementForm';

describe('RequirementForm', () => {
  it('should be rendered correctly', () => {
    const onSubmitMock = jest.fn();
    const wrapper = shallow(<RequirementForm onSubmit={onSubmitMock}/>);
    expect(wrapper.find('input[name="title"]').length).toEqual(1);
    expect(wrapper.find('textarea[name="steps"]').length).toEqual(1);
    expect(wrapper.find('input[name="expected"]').length).toEqual(1);
    expect(wrapper.find('button.form-submit').length).toEqual(1);
  });
});