import React, { Fragment } from 'react';
import { Button } from "react-bulma-components/full";

const Login = () => (
    <div className="container">
      <div className="tada">
        <img id="ome" src={require('../../images/btn-picture.jpg')} width="100%" height="100%"/>
        <a id="login-btn" className="button is-medium" href="#"><i className="icon fa fa-google">+</i><span>Login With Google</span></a>
      </div>
    </div>
)

export default Login;