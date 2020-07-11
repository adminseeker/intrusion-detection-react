import {createStore,combineReducers, applyMiddleware, compose} from "redux";
import intrusionsReducer from "../reducers/intrusions";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    const store = createStore(combineReducers({
        intrusions:intrusionsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    )
    return store;
}