import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import CaseHeader from './CaseHeader'
import ProjectList from './ProjectList'

import './Home.css'

class Home extends Component {
  render() {
    const { requirements } = this.props
    const requirementList = requirements.map((requirement, index) => (
      <div className="case-item" key={index}>
        <Link
          to={`/requirement/edit/${requirement.uuid}`}
          className="requirement-item">
          <span requirement="requirement-key" className="case-item-key">
            {index + 1}
          </span>
          <span requirement="requirement-title">{requirement.title}</span>
        </Link>
      </div>
    ))
    return (
      <React.Fragment>
        <div className="header">
          <div className="header-container">
            <CaseHeader />
            <ProjectList />
          </div>
        </div>
        <div className="home-container">
          <div className="case-list">
            {requirementList}
            <div className="case-item case-item-new">
              <span>
                {requirementList.length > 0
                  ? 'Create New Requirement'
                  : 'My First Requirement'}
              </span>
              <Link
                requirement="add-requirement-button"
                to="/requirement/create"
                className="circle black">
                +
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  requirements: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
      title: PropTypes.string,
      steps: PropTypes.string,
      expected: PropTypes.string
    })
  ).isRequired
}

export default Home
