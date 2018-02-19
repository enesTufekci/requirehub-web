import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="case-list">
          <div className="case-item case-item-new">
            <input type="text" placeholder="My First Requirement"/>
            <button className="circle black">+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;