import React from 'react';
import '../scss/Content.scss'


class Content extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            reminderStr: "",
            passwordError: ""
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
        this.onChangeEmailValue = this.onChangeEmailValue.bind(this);
        this.onChangePawValue = this.onChangePawValue.bind(this)
        this.onClearClick = this.onClearClick.bind(this)
    }
    emailCheck =(str)=> {
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        return reg.test(str);
    }

    onChangeEmailValue(e){
        this.handldeClick(e);
        let isEmailError = false
        if (!this.emailCheck(e.target.value)) {
            isEmailError = true
        }
        this.setState({
            reminderStr: isEmailError
        })
    }
    onChangePawValue(e){
        this.handldeClick(e);
        let isPawError = false
        if (!this.passwordCheck(e.target.value)) {
            isPawError = true
        }
        this.setState({
            passwordError: isPawError
        })
    }

    passwordCheck(str){
        var reg = /^(\w){6,20}$/;
        return reg.test(str)
    }

    handldeClick(event) {
        let target = event.target
        let name = target.name
        let value = target.value
        this.setState((prestate) => ({
            [name]: value
        }))
    }
    isInValidValue(text) {
        if (text !== undefined && text != null && text !== '') {
            return false
        } else {
            return true
        }
    }
    onChangeValue(event) {
        this.handldeClick(event);
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

    onClearClick() {
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        const {
            loginErrorMsg,
            loginPawError,
            loginEmailLabel,
            loginEmailRemarkLabel,
            loginPasswordLabel,
            loginPasswordRemarkLabel
        } = this.props

        return (
            <div className='login-content'>
                <div className='login-email'>
                    <label className='login-label'>{loginEmailLabel}</label>
                    <div className='login-email-operation'>
                        <input name='email' type='text' ref='emailInput' className='login-input' value={this.state.email} onChange={this.onChangeEmailValue}></input>
                    </div>
                    {this.state.reminderStr && <div className='login-error-msg'>{loginErrorMsg}</div>}
                    {!this.state.reminderStr && <div className='login-email-remark'>
                        {loginEmailRemarkLabel}
                    </div>}
                </div>
                <div className='login-password'>
                    <div className='content-align-right'>
                        <label className='login-label'>{loginPasswordLabel}</label>
                        <label className='login-label-remark'>{loginPasswordRemarkLabel}</label>
                    </div>
                    <div className='login-email-operation'>
                        <input name='password' type='text' ref='passwordInput' className='login-input' value={this.state.password} onChange={this.onChangePawValue}></input>
                    </div>
                    {this.state.passwordError && <div className='login-error-msg'>{loginPawError}</div>}
                </div>
                <div className='login-button content-align'>
                    <button className='login-button-text' onClick={this.onSignIn}>
                        Sign in
                    </button>
                </div>
                <div className='login-clear-button content-align'>
                    <button className='login-clear-button-text' onClick={this.onClearClick}>
                        Clear
                    </button>
                </div>
            </div>
        );
    }

}

export default Content;