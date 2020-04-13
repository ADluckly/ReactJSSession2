import React from 'react';
import LoginErrorMessage from './LoginErrorMessage'
import './scss/LoginContent.scss'
import '../lib/scss/common.scss'

class LoginContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isEmailError: false
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
        this.onChangeEmailValue = this.onChangeEmailValue.bind(this);
    }

    onChangeValue(event) {
        this.handldeClick(event);
    }

    onChangeEmailValue(event) {
        this.handldeClick(event);
        let isEmailError = false
        if (!this.isEmail(event.target.value)) {
            isEmailError = true
        }
        this.setState({
            isEmailError: isEmailError
        })
    }

    handldeClick(event) {
        let target = event.target
        let name = target.name
        let value = target.value
        this.setState((prestate) => ({
            [name]: value
        }))
    }

    isEmail(str) {
        var reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        return reg.test(str);
    }
    isValidValue(text) {
        return text !== undefined && text !== ''
    }

    onSignIn() {
        if (this.isEmail(this.state.email) && this.isValidValue(this.state.password) && !this.state.isEmailError) {
            this.props.onSignIn(this.state.email);
        }
    }

    render() {
        const {
            loginEmailLabel,
            loginEmailRemarkLabel,
            loginPasswordLabel,
            loginPasswordRemarkLabel,
        } = this.props
        return (
            <div className='login-content'>
                <div className='login-email'>
                    <label className='login-label'>{loginEmailLabel}</label>
                    <div className='login-email-operation'>
                        <input name='email' type='text' ref='emailInput' className='login-input' value={this.state.email} onChange={this.onChangeEmailValue}></input>
                    </div>
                    {this.state.isEmailError && <LoginErrorMessage />}
                    {!this.state.isEmailError && <div className='login-email-remark'>
                        {loginEmailRemarkLabel}
                    </div>}
                </div>
                <div className='login-password'>
                    <div className='content-align-right'>
                        <label className='login-label'>{loginPasswordLabel}</label>
                        <label className='login-label-remark'>{loginPasswordRemarkLabel}</label>
                    </div>
                    <div className='login-email-operation'>
                        <input name='password' type='password' ref='passwordInput' className='login-input' value={this.state.password} onChange={this.onChangeValue}></input>
                    </div>
                </div>
                <div className='login-button content-align'>
                    <button className='login-button-text' onClick={this.onSignIn}>
                        Sign in
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginContent;
