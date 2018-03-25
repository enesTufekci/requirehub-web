import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import RequirementForm from '../RequirementForm'
import '../Requirement.css'

class Requirement extends Component {
  handleCreateRequirement = values => {
    const { createRequirement, history } = this.props
    const uuid = v4()
    createRequirement({ uuid, ...values })
    history.push('/')
  }

  render() {
    return (
      <div className="requirement-container">
        <RequirementForm onSubmit={this.handleCreateRequirement} />
      </div>
    )
  }
}

Requirement.propTypes = {
  createRequirement: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default Requirement
