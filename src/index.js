import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <h1>Welcome!!!</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
