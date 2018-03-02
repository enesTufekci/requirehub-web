import React from 'react'
import { shallow } from 'enzyme'

import RequirementForm from '../RequirementForm'

describe('RequirementForm', () => {
  it('should be rendered correctly', () => {
    const onSubmitMock = jest.fn()
    const wrapper = shallow(<RequirementForm onSubmit={onSubmitMock} />)
    expect(wrapper.find('input[name="title"]')).toHaveLength(1)
    expect(wrapper.find('textarea[name="steps"]')).toHaveLength(1)
    expect(wrapper.find('input[name="expected"]')).toHaveLength(1)
    expect(wrapper.find('button.form-submit')).toHaveLength(1)
  })
  it('it should update state on input change', () => {
    const onSubmitMock = jest.fn()
    const wrapper = shallow(<RequirementForm onSubmit={onSubmitMock} />)
    const expectedTitle = 'title'
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        value: expectedTitle,
        getAttribute: attr => 'title'
      }
    })
    expect(wrapper.state().values.title).toEqual(expectedTitle)

    const expectedSteps = 'steps'
    wrapper.find('textarea[name="steps"]').simulate('change', {
      target: {
        value: expectedSteps,
        getAttribute: attr => 'steps'
      }
    })
    expect(wrapper.state().values.steps).toEqual(expectedSteps)

    const expectedExpected = 'expected'
    wrapper.find('input[name="expected"]').simulate('change', {
      target: {
        value: expectedExpected,
        getAttribute: attr => 'expected'
      }
    })
    expect(wrapper.state().values.expected).toEqual(expectedExpected)
    const preventDefaultMock = jest.fn()
    wrapper.find('button.form-submit').simulate('click', {
      preventDefault: preventDefaultMock
    })
    expect(preventDefaultMock.mock.calls).toHaveLength(1)
    expect(onSubmitMock.mock.calls).toHaveLength(1)
  })
})
