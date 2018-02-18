import React, { Component } from 'react';

class Case extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        Case { match.params.id }
      </div>
    );
  }
}

export default Case;