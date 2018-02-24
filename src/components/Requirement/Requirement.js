import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RequirementForm from './RequirementForm';
import './Requirement.css';

class Requirement extends Component {
  
  handleCreateRequirement = (values) => {
    const { createRequirement, history } = this.props;
    createRequirement(values);
    history.push('/');
  }
  
  render() {
    
    return (
      <div className="requirement-container">
        <RequirementForm onSubmit={this.handleCreateRequirement}/>
      </div>
    );
  }
}

Requirement.propTypes = {
  createRequirement: PropTypes.func.isRequired,
}

export default Requirement;
