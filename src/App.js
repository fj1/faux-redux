import React, { Component } from 'react';

import './App.css';
import appReducer from './appReducer';
import Greeting from './Greeting';
import Provider from './not-redux/Provider';
import createStore from './not-redux/createStore';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Greeting />
        </div>
      </Provider>
    );
  }
}

export default App;
