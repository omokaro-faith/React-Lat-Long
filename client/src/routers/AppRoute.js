import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';


const AppRoute = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={Dashboard} exact={true}/>
      <Route path="/login" component={Login}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
  </BrowserRouter>
)

export default AppRoute;
