import React, { Component } from 'react';

import RequirementForm from './RequirementForm';
import './Requirement.css';

class Requirement extends Component {
  
  handleSubmit = (values) => {
    
  }

  render() {
    return (
      <div className="requirement-container">
        <RequirementForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Requirement;
