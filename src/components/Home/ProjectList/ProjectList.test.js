import React from 'react'
import { mount } from 'enzyme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { SelectField, TextField } from 'material-ui'

import ProjectList from './index'
describe('ProjectList Component', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <ProjectList />
    </MuiThemeProvider>
  )
  const mockState = {
    selectedId: 1,
    projects: [
      {
        id: 1,
        title: 'Server',
        link: 'https://github.com/mxfactorial/requirehub'
      },
      {
        id: 2,
        title: 'Client',
        link: 'https://github.com/mxfactorial/requirehub-web'
      }
    ]
  }
  wrapper.setState(mockState)
  it('should render text field correctly', () => {
    // const textField = wrapper.find('#project-link').get(0)
    expect(wrapper.find('.project-link').find(TextField)).toHaveLength(1)
    const textField = wrapper
      .find('.project-link')
      .find(TextField)
      .get(0)
    expect(textField.props.readOnly).toBe(true)
    expect(textField.props.fullWidth).toBe(true)
    expect(textField.props.value).toBe(
      'https://github.com/mxfactorial/requirehub'
    )
  })
  it('should render project list correctly', () => {
    expect(wrapper.find(SelectField)).toHaveLength(1)
    const projectSelect = wrapper.find(SelectField).get(0)
    expect(projectSelect.props.floatingLabelText).toBe('Project')
    expect(projectSelect.props.autoWidth).toBe(true)
    expect(projectSelect.props.value).toBe(1)
  })
})
