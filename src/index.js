import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from './Provider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
