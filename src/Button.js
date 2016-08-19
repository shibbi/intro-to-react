import React, { Component } from 'react';
import './App.css';

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
      	{this.props.children}
      </button>
    );
  }
}

export default Button;
