import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <header>
    <h1>Lat-Lang</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}> Home </NavLink>
    <NavLink to="/login" activeClassName="is-active" exact={true}> Login </NavLink>
    <NavLink to="/profile" activeClassName="is-active" exact={true}> Profile </NavLink>
  </header>
)

export default Header;