import React from 'react';

import LoginTitle from './LoginTitle'
import LoginContent from './LoginContent'

import './scss/Login.scss'
import '../lib/scss/common.scss'

const labelJson = {
    loginTitle: 'Sign in to InVision',
    loginSubTitle: 'Enter your details below',
    loginEmailLabel: 'Email address',
    loginEmailRemarkLabel: 'Know your team domain?',
    loginPasswordLabel: 'Password',
    loginPasswordRemarkLabel: 'Forgot your password?'
}

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: 'AD',
            password: '123456',
            isLogin: false
        }
        this.onSignIn = this.onSignIn.bind(this);
    }
  

    componentDidMount() {
        console.log(this.refs.loginContentRef); // 访问挂载在组件上ref
        console.log(this.refs.loginContentRef.refs.emailInput); // 访问挂载在dom元素上的ref
        this.refs.loginContentRef.refs.emailInput.focus();
    }

    onSignIn() {
        debugger;
        this.setState({
            isLogin: true
        })
    }

    render() {
        const loginTitleProps = {
            loginTitle: labelJson.loginTitle,
            loginSubTitle: labelJson.loginSubTitle
        }
        const loginContentProps = {
            loginEmailLabel: labelJson.loginEmailLabel,
            loginEmailRemarkLabel: labelJson.loginEmailRemarkLabel,
            loginPasswordLabel: labelJson.loginPasswordLabel,
            loginPasswordRemarkLabel: labelJson.loginPasswordRemarkLabel,
            email: this.state.email,
            password: this.state.password,
            onSignIn: this.onSignIn
        }
        return (
            <div className='login'>
                <LoginTitle {...loginTitleProps} />

                {!this.state.isLogin && <div className='login-tips'>Please sign in</div>}
                {this.state.isLogin && <div className='login-tips'>Welcome!</div>}
                <LoginContent {...loginContentProps} ref='loginContentRef' />
            </div>
        );
    }
}

export default Login;
