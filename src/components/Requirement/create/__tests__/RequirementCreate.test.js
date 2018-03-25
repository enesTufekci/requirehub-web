import React from 'react'
import { mount } from 'enzyme'

import RequirementCreate from '../RequirementCreate'
import RequirementForm from '../../common/RequirementForm'

describe('Requirement Component', () => {
  const mockPush = jest.fn()
  const props = {
    createRequirement: jest.fn(),
    history: {
      push: mockPush
    }
  }
  const wrapper = mount(<RequirementCreate {...props} />)

  it('should render form', () => {
    expect(wrapper.find(RequirementForm)).toHaveLength(1)
  })

  it('should push history after form submit', () => {
    const form = wrapper.find(RequirementForm)
    form.props().onSubmit('mock')
    expect(mockPush.mock.calls).toHaveLength(1)
  })
})
