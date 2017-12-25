import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import mathReducer from "./reducers/mathReducer"
import userReducer from "./reducers/userReducer"
const logger = createLogger();
export default createStore(
  combineReducers({math: mathReducer, user: userReducer}),
  {},
  applyMiddleware(thunk, promise, logger)
);
