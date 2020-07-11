import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
