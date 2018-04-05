import React, { Component } from 'react';

import './App.css';
import Greeting from './Greeting';
import Provider from './not-redux/Provider';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className='App'>
          <Greeting />
        </div>
      </Provider>
    );
  }
}

export default App;
