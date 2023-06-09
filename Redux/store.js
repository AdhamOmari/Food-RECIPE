import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import allReducer from "./storeReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducer, composeEnhancers(applyMiddleware(thunk)),
);

export default store;