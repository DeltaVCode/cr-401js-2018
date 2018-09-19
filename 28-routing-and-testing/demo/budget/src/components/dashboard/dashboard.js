import React, { Component } from 'react';

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Dashboard Component</h1>
        <p>{this.props.test}</p>
      </React.Fragment>
    );
  }
}
