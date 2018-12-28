import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/styles.scss';

const Login = () => (
  <p>This is the Login page</p>
)

const Home = () => (
  <p>This is the Home page</p>
)

const Profile = () => (
  <p>This is your Profile page</p>
)

const NotFoundPage = () => (
  <div>404!</div>
)
const route = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(route, document.getElementById('app'));
