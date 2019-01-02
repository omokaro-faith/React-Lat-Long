import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (

    <nav className="navbar is-light" id="navbarCustom" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" id="logo" to="/">latLang</NavLink>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <h3 id="user-welcome-message"> Welcome Omokaro Faith</h3>
        </div>
      </div>
      <div className="navbar-end">
        <NavLink className="navbar-item" to="/" activeClassName="is-active" exact={true}> Dashboard </NavLink>
        <NavLink className="navbar-item" to="/login" activeClassName="is-active"> Login </NavLink>
        <NavLink className="navbar-item" to="/logout" activeclassname="is-active"> Logout </NavLink>
      </div>
    </nav>
)

export default Header;