import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducer from './allReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;


const store = createStore(allReducer, composeEnhancers(
  applyMiddleware(thunk)
) )

export default store


