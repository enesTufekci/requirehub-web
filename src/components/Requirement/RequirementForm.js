import React, { Component } from 'react';

class RequirementForm extends Component {
  state = {
    values: {
      title: null,
      steps: null,
      expected: null,
    }
  }

  handleUpdate = (e) => {
    const key = e.target.getAttribute('name');
    this.setState({
      values: { ...this.state.values, [key]: e.target.value }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.values);
  }

  render() {
    return (
      <form className="requirement-form">
        <div className="form-group">
          <input type="text" name="title" onChange={this.handleUpdate} placeholder="Title"/>
        </div>
        <div className="form-group">
          <textarea type="text" rows="5" name="steps" onChange={this.handleUpdate} placeholder="Steps"></textarea>
        </div>
        <div className="form-group">
          <input type="text" name="expected" onChange={this.handleUpdate} placeholder="Expected"/>
        </div>
        <button className="form-submit circle black" onClick={this.handleSubmit}>+</button>
      </form>
    )
  }
}

export default RequirementForm;
