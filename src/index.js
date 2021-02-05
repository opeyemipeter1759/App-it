import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter } from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducer from './redux/allReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(allReducer, composeEnhancers(applyMiddleware(thunk)))



ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

