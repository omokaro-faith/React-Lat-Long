import React, { Component } from 'react';
import { connect } from 'react-redux'
import { googleLogin } from '../actions/auth';
import { getUsers }  from '../actions/users';

class Login extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <div>
        <button onClick={this.props.googleLogin}>Login here</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleLogin: () => dispatch(googleLogin()),
  getUsers: () => dispatch(getUsers())
});

export default connect(null, mapDispatchToProps)(Login);