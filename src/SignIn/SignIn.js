import React from 'react'
import SignInHeader from './SignInHeader/SignInHeader'
import SignInBody from './SignInBody/SignInBody'
import './SignIn.scss'

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.hasError = false;
        this.state = {
            email: '',
            password: ''
        }
    }

    data = {
        hederTitleLabel: "Sign in to InVision",
        heaerDescriptionLabel: "Enter your details below",
        emailAddressLabel: "Email address",
        passwordLabel: "Password",
        forgotPasswordLabel: "Forgot your password",
        signInButtonLabel: "Sign in"
    };

    onChangeInput = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });

        if (name === 'email') {
            this.ValidEmailAddress(value);
        }
    }

    ValidEmailAddress = (value) => {
        this.hasError = false;
        if (!this.isEmailAddress(value)) {
            this.hasError = true;
        }
    }

    isEmailAddress(value) {
        //validate the email
        let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return reg.test(value);
    }

    onSignIn = (event) => {
        console.log('sign in success!!!');
        alert("sign in success!!!")
    }

    render() {
        const signInHeaderProps = {
            title: this.data.hederTitleLabel,
            description: this.data.heaerDescriptionLabel
        }

        const signInBodyProps = {
            emailLabel: this.data.emailAddressLabel,
            passwordLabel: this.data.passwordLabel,
            forgotPasswordLabel: this.data.forgotPasswordLabel,
            signInButtonLabel: this.data.signInButtonLabel,
            email: this.state.email,
            password: this.state.password,
            hasError: this.hasError,
            onChangeInput: this.onChangeInput,
            onSignIn: this.onSignIn
        }

        return (
            <div className='container'>
                <SignInHeader {...signInHeaderProps} />
                <SignInBody {...signInBodyProps} />
            </div>
        )
    }
}
