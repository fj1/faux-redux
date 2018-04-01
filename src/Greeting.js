import React, {Component} from 'react';

class Greeting extends Component {
  render() {
    return (
      <div className="App">
        <h1>Why hello!</h1>
        <h2>What's your name?</h2>
        <h2>My name is <input /></h2>
        <h2>Nice to meet you!</h2>
      </div>
    )
  }
}

export default Greeting
