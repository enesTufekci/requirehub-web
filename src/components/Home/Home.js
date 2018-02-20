import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="case-list">
          <div className="case-item case-item-new">
            <span>My First Requirement</span>
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