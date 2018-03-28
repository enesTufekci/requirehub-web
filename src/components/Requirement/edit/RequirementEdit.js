import React from 'react'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'
import RequirementForm from '../common/RequirementForm'

class RequirementEdit extends React.Component {
  static propTypes = {
    requirement: PropTypes.shape({
      uuid: PropTypes.string,
      title: PropTypes.string,
      steps: PropTypes.string,
      expected: PropTypes.string
    }).isRequired,
    updateRequirement: PropTypes.func.isRequired,
    history: ReactRouterPropTypes.history
  }
  handleUpdate = updatedValues => {
    const { updateRequirement, history } = this.props
    updateRequirement(updatedValues)
    history.push('/')
  }
  render() {
    const { requirement } = this.props
    return (
      <div className="requirement-container">
        <RequirementForm values={requirement} onSubmit={this.handleUpdate} />
      </div>
    )
  }
}

export default RequirementEdit
