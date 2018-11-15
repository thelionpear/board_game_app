import React, { Component } from 'react';
import { connect } from 'react-redux'

class Games extends Component {
  render() {
    return (
      <div>
        <h1>Games</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Games);