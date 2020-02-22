import React from 'react';
import CommonInput from '../common/CommonInput';
import CommonButton from '../common/CommonButton';

import '../common/scss/Common.scss'
import './scss/LoginContent.scss'

class LoginContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isEmailError: false,
            isButtonDisabled: true
        }
        this.onSignIn = this.onSignIn.bind(this);
        this.onChangeEmailValue = this.onChangeEmailValue.bind(this);
        this.onChangePasswordValue = this.onChangePasswordValue.bind(this);
    }

    onChangeEmailValue(e) {
        this.setState({[e.target.name]:  e.target.value});
        let isEmailError = false
        if (!this.isEmail(e.target.value)) {
            isEmailError = true
        }
        this.setState({ isEmailError: isEmailError });
        let isButtonDisabled = true;
        if(this.state.password && e.target.value && !isEmailError) {
            isButtonDisabled = false;
        }
        this.setState({ isButtonDisabled: isButtonDisabled });
    }

    isEmail(str) {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        return reg.test(str);
    }
    isInValidValue(text) {
        if (text) {
            return false
        } else {
            return true
        }
    }

    onChangePasswordValue(e) {
        console.log("changePass")
        this.setState({[e.target.name]:  e.target.value});
        let isButtonDisabled = true;
        if(this.state.email && e.target.value && !this.state.isEmailError) {
            isButtonDisabled = false;
        }
        this.setState({ isButtonDisabled: isButtonDisabled });
    }

    onSignIn() {
        if (!this.isInValidValue(this.state.email) && !this.isInValidValue(this.state.password) && !this.state.isEmailError) {
            this.props.onSignIn();
        }
        else {
            return;
        }
    }

    render() {
        console.log('Login Content Render!');
        const emailInputComProps = {
            ref: 'loginEamil',
            name: 'email',
            label: this.props.loginEmailLabel,
            inputType: 'text',
            inputRef: 'emailInput',
            isShowBottomRearkLabel: this.state.isEmailError,
            bottomRemarkLabel: this.props.loginEmailRemarkLabel,
            onChangeInput: this.onChangeEmailValue,
            errorMsg: 'The email format is valid'
        }

        const passwordInputComProps = [{
            ref: 'loginPassword',
            name: 'password',
            label: this.props.loginPasswordLabel,
            inputType: 'text',
            inputRef: 'passwordInput',
            isShowHeaderRearkLabel: true,
            headerRemarkLabel: this.props.loginPasswordRemarkLabel,
            onChangeInput: this.onChangePasswordValue
        }]

        const inputProps = [emailInputComProps, ...passwordInputComProps];

        const loginButtonProps = {
            buttonName: 'Sign in',
            isButtonDisabled: this.state.isButtonDisabled,
            onSignIn: this.onSignIn
        }

        return (
            <div className='login-content flex-start-colum'>
                {inputProps.map(input => <CommonInput key={input.inputRef} ref={input.ref} {...input} />)}
                <CommonButton {...loginButtonProps} />
            </div>
        );
    }
}

export default LoginContent;
