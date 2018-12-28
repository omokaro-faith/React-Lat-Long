import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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
  <div>
    <h2>Page Not Found</h2>
    <h3>We couldn't find what you were looking for.</h3>
  </div>
)

const Header = () => (
  <header>
    <h1>Lat-Lang</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}> Home </NavLink>
    <NavLink to="/login" activeClassName="is-active" exact={true}> Login </NavLink>
    <NavLink to="/profile" activeClassName="is-active" exact={true}> Profile </NavLink>
  </header>
)

const Footer = () => (
  <footer>
    <p>This is the footer</p>
  </footer>
)


const route = (
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

ReactDOM.render(route, document.getElementById('app'));
