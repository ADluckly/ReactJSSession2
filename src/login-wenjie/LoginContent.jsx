import React from 'react';
import LoginErrorMessage from './LoginErrorMessage';
import CommonBtn from '../common/CommonBtn';

import './scss/LoginContent.scss'

class LoginContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isEmailError: false,
            isDisableLoginBtn: true
        }
        this.onChangePasswordValue = this.onChangePasswordValue.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
        this.onChangeEmailValue = this.onChangeEmailValue.bind(this);
    }

    onChangeEmailValue(event) {
        this.handldeClick(event);
        let isEmailError = false
        if (!this.isEmail(event.target.value)) {
            isEmailError = true
        }
        this.setState({
            isEmailError: isEmailError
        });
        if(this.state.password && event.target.value && !isEmailError) {
            this.setState({ isDisableLoginBtn: false });
        } else {
            this.setState({ isDisableLoginBtn: true });            
        }
    }

    handldeClick(event) {
        let target = event.target
        let name = target.name
        let value = target.value
        this.setState({ [name]: value });
    }

    isEmail(str) {
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        return reg.test(str);
    }

    onChangePasswordValue(event) {
        this.handldeClick(event);
        if(this.state.email && event.target.value && !this.state.isEmailError) {
            this.setState({ isDisableLoginBtn: false });
        } else {
            this.setState({ isDisableLoginBtn: true });            
        }
    }

    isInValidValue(text) {
        if (text) {
            return false
        } else {
            return true
        }
    }

    onSignIn() {
        if (!this.isInValidValue(this.state.email) && !this.isInValidValue(this.state.password) && !this.state.isEmailError) {
            this.props.onSignIn();
        }
        else {
            return
        }
    }

    render() {
        const {
            loginEmailLabel,
            loginEmailRemarkLabel,
            loginPasswordLabel,
            loginPasswordRemarkLabel,
        } = this.props
        
        const loginButtonProps = {
            buttonName: 'Sign in',
            isButtonDisabled: this.state.isDisableLoginBtn,
            onSignIn: this.onSignIn
        }

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
                    <div className='login-password-label-box'>
                        <label className='login-label'>{loginPasswordLabel}</label>
                        <label className='login-label-remark'>{loginPasswordRemarkLabel}</label>
                    </div>
                    <div className='login-email-operation'>
                        <input name='password' type='text' ref='passwordInput' className='login-input' value={this.state.password} onChange={this.onChangePasswordValue}></input>
                    </div>
                </div>
                <CommonBtn {...loginButtonProps} />
            </div>
        );
    }
}

export default LoginContent;
