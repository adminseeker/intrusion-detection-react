import React from "react";
import ReactDOM from "react-dom";
//import TestPage from "./components/TestPage";
import Dashboard from "./components/Dashboard";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
