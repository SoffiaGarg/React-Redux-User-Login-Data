import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import Reducer from './store/Reducer';
import {Provider} from 'react-redux'; //this package we need to inject redux in react

var store = createStore(Reducer); //only Reducer can update the store 
ReactDOM.render(
  <Provider  store= {store}> <React.StrictMode>
  <App />
</React.StrictMode></Provider>,
 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
