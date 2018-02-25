import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    const { requirements } = this.props;
    const requirementList = requirements.map((requirement) => 
      (
        <div className="case-item">
          <Link to={`/requirement/${requirement.id}`} className="requirement-item">
            <span>{ requirement.title}</span>
          </Link>
        </div>
      )
    );
    return (
      <div className="home-container">
        <div className="case-list">
          { requirementList }
          <div className="case-item case-item-new">
            <span>{ requirementList.length > 0 ? 'Create New Requirement' : 'My First Requirement' }</span>
            <Link to="/requirement/create" className="circle black">+</Link>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  requirements: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Home;