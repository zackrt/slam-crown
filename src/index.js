import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//mounts the entire app, it's a bootstapper
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
