import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../styles/styles.scss';
import configureStore from './store/configureStore';
import AppRoute from './routers/AppRoute';

const store = configureStore();

const state = store.getState();

const ConnectApp = (
  <Provider store={store}>
    <AppRoute />
  </Provider>
)

ReactDOM.render(ConnectApp, document.getElementById('app'));