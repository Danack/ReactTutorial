import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class HelloElement extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.name}! This is some ReactJS!</h2>
      </div>
    );
  }
}

