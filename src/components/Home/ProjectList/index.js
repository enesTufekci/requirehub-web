import React from 'react'
import { MenuItem } from 'material-ui/Menu'
import { Select } from 'material-ui'

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
  }
  render() {
    const { projects } = this.state
    const selectedUrl = this.state.value || this.state.projects[0].url
    const style = { "font-size": 10 }
    return (
      <div className="project-list-container">
        <div className="project-link">
          <a href={selectedUrl} target="_blank">
            {selectedUrl}
          </a>
        </div>
        <div className="project-dropdown">
          <Select value={selectedUrl} onChange={this.handleChange} style={style}>
            {projects.map(project => (
              <MenuItem key={project.id} value={project.url} style={style}>
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
