import React, { Component } from "react";
import { connect } from "react-redux";

import { signIn,signUp } from "../../store/actions/authAction";
import Signin from './SignIn';
import Signup from './SignUp';
import {Redirect} from 'react-router-dom';

class AuthInterface extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  handleLogin = (formData) => {
    // console.log("in interface");
    // console.log(formData);
    this.props.signIn(formData);
  };

  handleSignUp = (formData) => {
    // console.log("in interface");
    // console.log(formData);
    this.props.signUp(formData);
  };

  render() {
    const loggedin = this.props.firebase.auth.uid;
    return (
      loggedin ? <Redirect to='/'/> 
      :
        this.props.mode === 'signin' ?
        <Signin handleLogin={(creds) => this.handleLogin(creds)} {...this.props}/>:
        <Signup handleSignUp={(userInfo) => this.handleSignUp(userInfo)} {...this.props}/>
    )
  }
}
const mapStateToProps = (state) =>{
    console.log(state);
    return {
        ...state,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signIn: (creds) => dispatch(signIn(creds)),
        signUp: (userInfo) => dispatch(signUp(userInfo))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthInterface);