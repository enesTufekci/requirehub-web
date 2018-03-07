import React from 'react'
import { MenuItem } from 'material-ui/Menu'
import { Select, Button } from 'material-ui'

import './ProjectList.css'

class ProjectList extends React.Component {
  state = {
    projects: [
      {
        id: 1,
        title: 'Server',
        url: 'https://github.com/mxfactorial/requirehub'
      },
      {
        id: 2,
        title: 'Client',
        url: 'https://github.com/mxfactorial/requirehub-web'
      }
    ],
    value: null
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({ value })
    window.open(value, '_blank')
  }
  render() {
    const { projects } = this.state
    const selectedUrl = this.state.value || this.state.projects[0].url
    return (
      <div className="project-list-container">
        <div className="project-link">
          <Button
            target="_blank"
            variant="raised"
            href={selectedUrl}
            style={{ textTransform: 'none', width: '90%', textAlign: 'left' }}>
            {selectedUrl}
          </Button>
        </div>
        <div className="project-dropdown">
          <Select
            value={selectedUrl}
            onChange={this.handleChange}
            autoWidth
            inputProps={{
              name: 'project'
            }}>
            {projects.map(project => (
              <MenuItem key={project.id} value={project.url}>
                {project.title}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    )
  }
}

export default ProjectList
