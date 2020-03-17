import React, { Component } from 'react'
import './scss/index.scss'
import LoginTitle from './LoginTitle';
import LoginContent from './LoginContent';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginTitleLabel: 'Sign in To InVision',
            loginTitleLabelInfo: 'Enter your details below',
            loginFromEmailTitle: 'Email address',
            loginFromEmailInfo: 'Know your team domain?',
            loginFromPasswordTitle: 'Password',
            loginFromPasswordLabelInfo: 'Forgot your password?',
            loginFromButton: 'Sign in',
        }
    }
    render() {
        const title = {
            loginTitleLabel: this.state.loginTitleLabel,
            loginTitleLabelInfo: this.state.loginTitleLabelInfo
        }
        const content = {
            loginFromEmailTitle: this.state.loginFromEmailTitle,
            loginFromEmailInfo: this.state.loginFromEmailInfo,
            loginFromPasswordTitle: this.state.loginFromPasswordTitle,
            loginFromPasswordLabelInfo: this.state.loginFromPasswordLabelInfo,
            loginFromButton: this.state.loginFromButton,


        }
        return (
            <div className="login">
                <div className="login-form">
                    <LoginTitle content={title} />
                    <LoginContent content={content} />
                </div>
            </div>

        )
    }
}
export default Login
