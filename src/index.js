import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import ErrorBoundary from "./components/ErrorBoundary";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();

const jsx = (
        <Provider store={store}>
          <ErrorBoundary >
            <AppRouter />
          </ErrorBoundary>
    </Provider>
);


ReactDOM.render(jsx,document.getElementById("root"));



serviceWorker.unregister();
