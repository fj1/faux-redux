import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import connect from './not-redux/connect';

class Greeting extends Component {
  handleInputChange = e => {
    this.props.storeActions.setName(e.currentTarget.value);
  }

  componentDidMount() { 
    this.props.storeActions.getName();
  }
  
  componentWillReceiveProps() {
    this.props.storeActions.getName();
  }

  render() {
    const {name} = this.props.store

    return (
      <div className="App">
        <h1>Why hello!</h1>
        <h2>What's your name?</h2>
        <h2>My name is 
            <input onChange={this.handleInputChange} />
        </h2>
        {name && <h2>{`Nice to meet you, ${name}!`}</h2>}
      </div>
    )
  }
}

const ConnectedGreeting = connect(Greeting)

export default ConnectedGreeting
