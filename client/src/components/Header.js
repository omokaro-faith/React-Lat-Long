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
          <NavLink className="navbar-item" id="logo" to="/dashboard">latLang</NavLink>
        </div>
        { displayName &&  <div className="navbar-end">
          <img id="kkk" src={ photoURL }/>
          <button  id="mmm" className="is-medium" onClick={startLogout} activeclassname="is-active"> Logout </button>
          <div className="navbar-item">
          </div>
        </div> }
      </nav>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state) => ({
  displayName: state.auth.displayName,
  photoURL: state.auth.photoURL
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);