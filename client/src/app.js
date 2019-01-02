import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import '../styles/styles.scss';
import configureStore from './store/configureStore';
import AppRoute, { history }from './routers/AppRoute';
import LoadingContainer from '../src/components/LoadingContainer';
import { Login, Logout } from './actions/auth';

const store = configureStore();

const ConnectApp = (
  <Provider store={store}>
    <AppRoute />
  </Provider>
)


let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(ConnectApp, document.getElementById('app'));
    hasRendered = true;
  }
}

ReactDOM.render(<LoadingContainer/>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(Login(user));
    renderApp();
    if(history.location.pathname === '/') {
      history.push('/dashboard');
    }
  }else {
    store.dispatch(Logout());
    renderApp();
    history.push('/');
  };
});
