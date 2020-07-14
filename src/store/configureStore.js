import {createStore,combineReducers, applyMiddleware, compose} from "redux";
import intrusionsReducer from "../reducers/intrusions";
import filtersReducer from "../reducers/filters";
import thunk from "redux-thunk";
import selectionsReducer from "../reducers/selections";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    const store = createStore(combineReducers({
        intrusions:intrusionsReducer,
        filters:filtersReducer,
        selections:selectionsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    )
    return store;
}