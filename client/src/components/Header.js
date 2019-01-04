import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export class Header extends Component {

  render() {
    const { startLogout, displayName, photoURL } = this.props;
    return (
      <nav className="navbar is-fixed-top is-light" id="navbarCustom" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item" id="navbarCustom__logo" to="/dashboard" exact={true}>latLang</NavLink>
        </div>
        { displayName &&  <div className="navbar-end">
          <img id="navbarCustom__avatar" src={ photoURL }/>
          <button  id="navbarCustom__logout__btn" className="is-medium" onClick={startLogout} activeclassname="is-active"> Logout </button>
          <div className="navbar-item">
          </div>
        </div> }
      </nav>
    )
  }
}


const mapStateToProps = (state) => ({
  displayName: state.auth.displayName,
  photoURL: state.auth.photoURL
});

export default connect(mapStateToProps, {startLogout})(Header);