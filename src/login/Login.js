import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/login.scss';
import LoginTitle from './LoginTitle';
import LoginContent from './LoginContent';

const loginContent = {
  loginTitle: 'Sign in to InVision',
  loginSubTitle: 'Enter your details below',
  loginEmailLabel: 'Email address',
  loginEmailRemarkLabel: 'Know your team domain?',
  loginErrorMsg: 'The email format is valid',
  loginPasswordLabel: 'Password',
  loginPasswordRemarkLabel: 'Forgot your password?',
  loginButton: 'Sign in'
}

class Login extends React.Component{
  render() {
    const loginTitleProps = {
      loginTitle: loginContent.loginTitle,
      loginSubTitle: loginContent.loginSubTitle
    }

    const loginContentProps = {
      loginEmailLabel: loginContent.loginEmailLabel,
      loginEmailRemarkLabel: loginContent.loginEmailRemarkLabel,
      loginErrorMsg: loginContent.loginErrorMsg,
      loginPasswordLabel: loginContent.loginPasswordLabel,
      loginPasswordRemarkLabel: loginContent.loginPasswordRemarkLabel,
      loginButton: loginContent.loginButton
    }
    
    return (
      <div className="login">
        <LoginTitle {...loginTitleProps} />
        <LoginContent {...loginContentProps} />
      </div>
    );
  }
}
export default Login;