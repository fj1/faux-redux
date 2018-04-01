import React, {Component} from 'react';

class Greeting extends Component {
  handleInputChange = e => {
    console.log(e.currentTarget.value);
  }

  render() {
    return (
      <div className="App">
        <h1>Why hello!</h1>
        <h2>What's your name?</h2>
        <h2>My name is 
            <input onChange={this.handleInputChange} />
        </h2>
        <h2>Nice to meet you!</h2>
      </div>
    )
  }
}

export default Greeting
