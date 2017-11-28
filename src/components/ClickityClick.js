import React, { Component } from 'react';
 
class ClickityClick extends Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
    };
  }

  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    }), () => {console.log(this.hasBeenClicked)}
  }
  
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? false : 'not' } been clicked!</p>
        <button onClick={ this.handleClick }>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;