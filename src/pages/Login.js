import React, {Component} from 'react';
import '../pages/Login.css';
import './Common.css';

import LoginForm from "../components/LoginForm"
import LogoImg from "../components/LogoImg"

class Login extends Component {
  render() {
    return (
      <div className= "loginContainer">
        <LogoImg />
        <LoginForm />
      </div>   
    )
  }
}

export default Login;
