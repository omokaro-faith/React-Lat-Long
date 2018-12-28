import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import Login from '../components/Login';
import Profile from '../components/Profile';
import NotFoundPage from '../components/NotFoundPage';
import Footer from '../components/Footer';


const AppRoute = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile}/>
      <Route component={NotFoundPage}/>
    </Switch>
    <Footer />
  </div>
  </BrowserRouter>
)

export default AppRoute;
