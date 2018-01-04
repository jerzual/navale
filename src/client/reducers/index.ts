import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import { babylonJSMiddleware } from 'react-babylonjs'
// Note: this API requires redux@>=3.1.0
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, babylonJSMiddleware)
);

export default store;