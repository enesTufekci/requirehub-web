import React from 'react'
import { createShallow } from 'material-ui/test-utils'
import { MenuItem } from 'material-ui/Menu'
import { Select } from 'material-ui'
import ProjectList from './index'

describe('<ProjectList />', () => {
  let shallow
  beforeAll(() => {
    shallow = createShallow()
  })

  afterAll(() => {
    shallow.cleanUp()
  })
  it('should render link correctly', () => {
    const wrapper = shallow(<ProjectList />)
    const linkButton = wrapper.find('.project-link').find('a')
    expect(linkButton).toHaveLength(1)
    expect(linkButton.prop('target')).toEqual('_blank')
    expect(linkButton.prop('href')).toEqual(wrapper.state().projects[0].url)
  })
  it('should render select correctly', () => {
    const wrapper = shallow(<ProjectList />)
    const select = wrapper.find(Select)
    expect(select).toHaveLength(1)
    expect(select.find(MenuItem)).toHaveLength(wrapper.state().projects.length)
  })
  test('handleChange should update state, link href', () => {
    const wrapper = shallow(<ProjectList />)
    let component = wrapper.instance()
    const { handleChange } = component
    const mockUrl = 'mockUrl'
    const mockOpen = jest.fn()
    global.open = mockOpen
    handleChange({ target: { value: mockUrl } })
    expect(wrapper.state().value).toBe(mockUrl)
    wrapper.update()
    const linkButton = wrapper.find('.project-link').find('a')
    expect(linkButton.prop('href')).toEqual(mockUrl)
    expect(mockOpen.mock.calls).toEqual([[mockUrl, '_blank']])
  })
  test('handleChange should be called when select change', () => {
    const wrapper = shallow(<ProjectList />)
    let component = wrapper.instance()
    const mockFn = jest.fn()
    component.handleChange = mockFn
    component.forceUpdate()
    wrapper.update()
    const select = wrapper.find(Select)
    select.simulate('change')
    expect(mockFn).toHaveBeenCalled()
  })
})
