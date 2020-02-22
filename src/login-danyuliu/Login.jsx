import React from 'react';
import LoginTitle from './LoginTitle';
import LoginContent from './LoginContent';

import './scss/Login.scss'

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
        this.state = { isLogin: false }
        this.onSignIn = this.onSignIn.bind(this);
    }

    componentDidMount() {
        console.log(this.refs.loginContentRef);
        console.log(this.refs.loginContentRef.refs.loginEamil);
        console.log(this.refs.loginContentRef.refs.loginEamil.refs.emailInput);
        this.refs.loginContentRef.refs.loginEamil.refs.emailInput.focus();
    }

    onSignIn() {
        debugger;
        this.setState({ isLogin: true });
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
            onSignIn: this.onSignIn
        }

        return (
            <div className="login flex-start-colum">
                <LoginTitle {...loginTitleProps} />
                {!this.state.isLogin && <div className='login-tips'>Please sign in</div>}
                {this.state.isLogin && <div className='login-tips'>Welcome!</div>}
                <LoginContent ref="loginContentRef" {...loginContentProps} />
            </div>
        );
    }
}

export default Login;