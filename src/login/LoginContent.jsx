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

    componentDidMount() {
        console.log('Login Content Component DID MOUNT!')
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('=============================================')
    //     console.log('Login Content get Derived State From Props!')
    //     if (prevState !== nextProps) {
    //         return {
    //             email: nextProps.email,
    //             password: nextProps.password
    //         };
    //     }
    //     // Return null to indicate no change to state.
    //     return null;
    // }
    componentDidUpdate(prevProps, prevState) {
        console.log('Login Content Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Login Content Component WILL UNMOUNT!')
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
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        return reg.test(str);
    }
    isInValidValue(text) {
        if (text != undefined && text != null && text != '') {
            return false
        } else {
            return true
        }
    }

    onSignIn() {
        // this.refs.emailInput.focus();
        if (!this.isInValidValue(this.state.email) && !this.isInValidValue(this.state.password) && !this.state.isEmailError) {
            this.props.onSignIn();
        }
        else {
            return
        }
    }

    render() {
        console.log('Login Content Render!')
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
                        <input name='password' type='text' ref='passwordInput' className='login-input' value={this.state.password} onChange={this.onChangeValue}></input>
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
