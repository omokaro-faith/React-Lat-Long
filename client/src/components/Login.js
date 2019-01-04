import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import LoginImage from '../../images/btn-picture.jpg';

export class Login extends Component {
  constructor(props) {
    super(props);
  }

  Login = () => {
    const { startLogin } = this.props;
    startLogin();
  }

  render() {
    return(
    <div className="container">
      <div>
        <img id="container__image" src={LoginImage} width="100%" height="100%"/>
        <button className="button is-medium" onClick={ this.Login }><span>Login With Google</span></button>
      </div>
    </div>
    )
  }
}

export default connect(null, { 
  startLogin
 })(Login);
