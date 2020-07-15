import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import LoadingPage from "./components/LoadingPage";
import ErrorBoundary from "./components/ErrorBoundary";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import {startGetIntrusions} from "./actions/intrusions";
import "normalize.css/normalize.css"
import "react-dates/lib/css/_datepicker.css";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();
let hasRendered = false;

const jsx = (
        <Provider store={store}>
          <ErrorBoundary >
            <AppRouter />
          </ErrorBoundary>
    </Provider>
);

if(!hasRendered)
ReactDOM.render(<LoadingPage />,document.getElementById("root"));

const renderApp = ()=>{
  if(!hasRendered){
    ReactDOM.render(jsx,document.getElementById("root"));
    hasRendered = true
  }
}

ReactDOM.render(jsx,document.getElementById("root"));


store.subscribe(()=>{
  store.dispatch(startGetIntrusions(store.getState().filters.password)).then((res)=>{
    renderApp()
  })
})

serviceWorker.unregister();
