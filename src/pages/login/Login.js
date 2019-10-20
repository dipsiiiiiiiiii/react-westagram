import React, {Component} from 'react';
import './Login.scss';
import '../../styles/Common.scss';

import LoginForm from "../../components/loginForm/LoginForm"
import LogoImg from "../../components/loginForm/LogoImg"

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
