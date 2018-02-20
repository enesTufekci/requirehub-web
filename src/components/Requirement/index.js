import React, { Component } from 'react';

class Requirement extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        Case { match.params.id }
      </div>
    );
  }
}

export default Requirement;
