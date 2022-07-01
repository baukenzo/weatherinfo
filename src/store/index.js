import {legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next ({
            type: action
        })
    }
    return next(action)
}

const store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(stringMiddleware)
    );

export default store;