import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import connect from './not-redux/connect';

class Greeting extends Component {

  handleInputChange = e => {
    console.log(e.currentTarget.value);
  }

  render() {
    const {name} = this.props

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

const mapStateToProps = state => ({name: state.name});

const mapDispatchToProps = () => {}

const ConnectedGreeting = connect(mapStateToProps, mapDispatchToProps, Greeting)

export default ConnectedGreeting
