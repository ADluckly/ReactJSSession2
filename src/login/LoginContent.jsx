import React from 'react';
import LoginErrorMessage from './LoginErrorMessage';
import './scss/LoginContent.scss';
import '../lib/scss/common.scss';
import {isInValidValue, isEmail} from '../lib/js/common.js';

class LoginContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.email,
            password: props.password,
            isEmailError: false,
            isPasswordError: false,
            enableSignIn: false
        }
        this.inputOnChange = this.inputOnChange.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
    }

    checkValue(name, value) {
        if ('email' === name) {
            return isEmail(value);
        }
        if ('password' === name) {
            return !isInValidValue(value)
        }
    }

    inputOnChange(e) {
        e.persist();
        const state = {
            [e.target.name]: e.target.value
        }
        if ('email' === e.target.name) {
            state.isEmailError = !this.checkValue('email', e.target.value);
            state.enableSignIn = !state.isEmailError && this.checkValue('password', this.state.password);
        }
        if ('password' === e.target.name) {
            state.isPasswordError = !this.checkValue('password', e.target.value);
            state.enableSignIn = !state.isPasswordError && this.checkValue('email', this.state.email);
        }
        this.setState(state);
    }

    onSignIn() {
        if (this.state.enableSignIn) {
            this.props.onSignIn();
        } else if (!this.checkValue('email', this.state.email)) {
            this.emailInputRef.current.focus();
            this.setState({isEmailError: true});
        } else if (!this.checkValue('password', this.state.password)) {
            this.passwordInputRef.current.focus();
            this.setState({isPasswordError: true});
        }
    }

    render() {
        const {
            loginEmailLabel,
            loginEmailRemark,
            loginEmailErrorMessage,
            loginPasswordLabel,
            loginPasswordRemark,
            loginPasswordErrorMessage,
            loginButtonName
        } = this.props;
        return (
            <div className='login-content'>
                <div className='login-email'>
                    <label className="login-label">{loginEmailLabel}</label>
                    <div className='login-email-operation'>
                        <input name='email'
                               type='text'
                               ref={this.emailInputRef}
                               className={this.state.isEmailError ? 'login-input input-error' : 'login-input'}
                               value={this.state.email}
                               onChange={this.inputOnChange}>
                        </input>
                    </div>
                    {this.state.isEmailError ?
                    <LoginErrorMessage message={loginEmailErrorMessage} /> :
                    <div className='login-email-remark'>{loginEmailRemark}</div>}
                </div>
                <div className='login-password'>
                    <div className='content-align-right'>
                        <label className='login-label'>{loginPasswordLabel}</label>
                        <label className='login-label-remark'>{loginPasswordRemark}</label>
                    </div>
                    <div className='login-password-operation'>
                        <input name='password'
                               type='password'
                               ref={this.passwordInputRef}
                               className={this.state.isPasswordError ? 'login-input input-error' : 'login-input'}
                               value={this.state.password}
                               onChange={this.inputOnChange}>
                        </input>
                    </div>
                    {this.state.isPasswordError && <LoginErrorMessage message={loginPasswordErrorMessage} />}
                </div>
                <div className='login-button content-align'>
                    <button className={this.state.enableSignIn ? 'login-button-text enable-button' : 'login-button-text'} onClick={this.onSignIn}>
                        {loginButtonName}
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginContent;
