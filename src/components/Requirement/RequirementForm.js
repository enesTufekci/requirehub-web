import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RequirementForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    values: PropTypes.shape({
      title: PropTypes.string,
      steps: PropTypes.string,
      expected: PropTypes.string
    })
  }

  static defaultProps = {
    values: {
      title: '',
      steps: '',
      expected: ''
    }
  }

  state = {
    values: { ...this.props.values }
  }

  handleUpdate = e => {
    const key = e.target.getAttribute('name')
    this.setState({
      values: { ...this.state.values, [key]: e.target.value }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.values)
  }

  render() {
    const { title, steps, expected } = this.state.values
    return (
      <form className="requirement-form">
        <div className="form-group">
          <input
            type="text"
            requirement="title-input"
            name="title"
            value={title}
            onChange={this.handleUpdate}
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            requirement="steps-input"
            rows="5"
            name="steps"
            value={steps}
            onChange={this.handleUpdate}
            placeholder="Steps"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            requirement="expected-input"
            name="expected"
            value={expected}
            onChange={this.handleUpdate}
            placeholder="Expected"
          />
        </div>
        <button
          requirement="save-button"
          className="form-submit circle black"
          onClick={this.handleSubmit}>
          +
        </button>
      </form>
    )
  }
}

export default RequirementForm
