import React from 'react'
import RequirementEdit from '../RequirementEdit'
import RequirementForm from '../../common/RequirementForm'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import CancelIcon from 'material-ui-icons/Cancel'

describe('<RequirementEdit />', () => {
  const updateRequirementMock = jest.fn()
  const requirementMock = {
    uuid: '1234-abcd',
    title: 'Mock Requirement',
    steps: 'Mock Steps',
    expected: 'Mock Expected'
  }
  const mockProps = {
    requirement: requirementMock,
    updateRequirement: updateRequirementMock
  }
  it('should render edit form (with default values)', () => {
    const wrapper = shallow(<RequirementEdit {...mockProps} />)
    expect(wrapper.find(RequirementForm)).toHaveLength(1)
    expect(wrapper.find(RequirementForm).props().values).toEqual(
      requirementMock
    )
  })
  it('should render cancel link with icon', () => {
    const wrapper = shallow(<RequirementEdit {...mockProps} />)
    expect(wrapper.find(Link)).toHaveLength(1)
    expect(wrapper.find(Link).props().to).toBe('/')
    expect(wrapper.find(Link).find(CancelIcon)).toHaveLength(1)
  })
})
