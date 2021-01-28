import {createStore} from 'redux';
import logger from 'redux-logger';
import allReducer from './allReducers'


 const middlewares = [logger];

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store