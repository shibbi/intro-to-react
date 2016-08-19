// keep state-related logic here, especially shared logic between componenets
// react.rocks for component libraries
// surge.sh quick deploys

import React, { Component } from 'react';
import Button from './Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static propTypes = {
    showHeader: React.PropTypes.bool
  }
  
  constructor (props) {
    super(props)
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    if ( this.props.showHeader ) {
      var header = (
        <span>
          Header here
        </span>
      )
    } else {
      var header = null
    }

    if ( this.state.clicked ) {
      var paragraphStyle = {
        color: 'green',
        fontSize: '70px'
      }
    } else {
      var paragraphStyle = {
        color: 'red',
        fontSize: '20px'
      }
    }

    var buttonText = (this.state.clicked) ? "Clicked!" : "Not Clicked"

    return (
      <div className="App" >
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*comment out lines within html like this*/}
          <h2>{header}</h2>
        </div>
        <p className="App-intro" style={paragraphStyle}>
          I change! btw, use the <code>code</code> tag for code.
        </p>
        <Button onClick={this.handleClick}><h1>{buttonText}</h1></Button>
      </div>
    );
  }
}

export default App;
