import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: false
    }
  }

  Login = () => {
    this.props.startLogin();
    this.setState({
      disable: true
    })
  }
  render() {
    const { disable } = this.state;
    return(
    <div className="container">
      <div>
        <img id="container__image" src={require('../../images/btn-picture.jpg')} width="100%" height="100%"/>
        <button className="button is-medium" onClick={ this.Login } disabled={ disable }><span>Login With Google</span></button>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});


export default connect(null, mapDispatchToProps)(Login);
