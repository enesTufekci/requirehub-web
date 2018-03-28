import React from 'react'
import RequirementEdit from '../RequirementEdit'
import RequirementForm from '../../common/RequirementForm'
import { shallow } from 'enzyme'

describe('<RequirementEdit />', () => {
  const requirementMock = {
    uuid: '1234-abcd',
    title: 'Mock Requirement',
    steps: 'Mock Steps',
    expected: 'Mock Expected'
  }
  it('should render edit form (with default values)', () => {
    const wrapper = shallow(<RequirementEdit requirement={requirementMock} />)
    expect(wrapper.find(RequirementForm)).toHaveLength(1)
    expect(wrapper.find(RequirementForm).props().values).toEqual(
      requirementMock
    )
  })
})
