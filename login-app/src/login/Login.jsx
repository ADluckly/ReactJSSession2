import React from 'react';
import './Login.scss';
import LoginTitle from './LoginTitle.jsx';
import LoginContent from './LoginContent.jsx';


const labelJson={
  loginTitle: 'Sign in to InVision',
  loginSubTitle: 'Enter your detail below',
  loginEmailLabel: 'Email Address',
  loginEmailRemarkLabel: 'Kown your team domain?',
  loginPasswordLabel: 'Password',
  loginPasswordRemarkLabel: 'Forgot your password?',
  loginButton: 'Sign in'
}


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }


  componentDidMount(){
    this.refs.loginContentRef.refs.emailInput.focus();
  }

  render(){
    const loginTitleProps={
      loginTitle: labelJson.loginTitle,
      loginSubTitle: labelJson.loginSubTitle
    }
    const loginContentProps={
      loginEmailLabel: labelJson.loginEmailLabel,
      loginEmailRemarkLabel: labelJson.loginEmailRemarkLabel,
      loginPasswordLabel: labelJson.loginPasswordLabel,
      loginPasswordRemarkLabel: labelJson.loginPasswordRemarkLabel,
      loginButton: labelJson.loginButton,
      email: this.state.email,
      password: this.state.password,
    }
    return (
      <div className="login">
        <LoginTitle {...loginTitleProps} />
        <LoginContent {...loginContentProps} ref='loginContentRef'/>
      </div>
    )
  }
}

export default Login;
