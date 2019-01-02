import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
 import createHistory from 'history/createBrowserHistory';

import PrivateRoute from './PrivateRoute';
import PublicRoute  from './PublicRoute';
import Header from '../components/Header';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRoute = () => (
  <Router history={history}>
  <div>
    <Switch>
      <PublicRoute path="/" component={Login} exact={true}/>
      <PrivateRoute path="/dashboard" component={Dashboard}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
  </Router>
)

export default AppRoute;
