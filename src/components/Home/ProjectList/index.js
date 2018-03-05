import React from 'react'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'

import './ProjectList.css'

class ProjectList extends React.Component {
  state = {
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
  handleChange = (event, index, selectedId) => {
    this.setState({ selectedId })
    window.open(
      this.state.projects.find(project => project.id === selectedId).link,
      '_blank'
    )
  }
  render() {
    const { selectedId, projects } = this.state

    return (
      <div className="project-list-container">
        <div className="project-link">
          <TextField
            id="project-link"
            fullWidth
            readOnly
            value={
              this.state.projects.find(project => project.id === selectedId)
                .link
            }
          />
        </div>
        <div className="project-dropdown">
          <SelectField
            floatingLabelText="Project"
            value={selectedId}
            onChange={this.handleChange}
            autoWidth>
            {projects.map(project => (
              <MenuItem
                key={project.id}
                value={project.id}
                primaryText={project.title}
              />
            ))}
          </SelectField>
        </div>
      </div>
    )
  }
}

export default ProjectList
