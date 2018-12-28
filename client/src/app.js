import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.scss';
import configureStore from './store/configureStore';
import AppRoute from './routers/AppRoute';

const store = configureStore();

const state = store.getState();
console.log(state);

ReactDOM.render(<AppRoute />, document.getElementById('app'));
