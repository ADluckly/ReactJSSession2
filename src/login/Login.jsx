import React from 'react';
import LoginTitle from './LoginTitle';
import LoginContent from './LoginContent';
import './scss/Login.scss';

const loginLabel = {
    loginTitle: 'Sign in to InVision',
    loginSubTitle: 'Enter your details below',
    loginEmailLabel: 'Email address',
    loginEmailRemark: 'Know your team domain?',
    loginEmailErrorMessage: 'The email format is invalid',
    loginPasswordLabel: 'Password',
    loginPasswordRemark: 'Forgot your password?',
    loginPasswordErrorMessage: 'The password can not be empty',
    loginButtonName: 'Sign in'
};

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.onSignIn = this.onSignIn.bind(this);
        this.state = {
            email: '',
            password: '',
            isLogin: false
        }
        this.loginContentRef = React.createRef();
    }

    onSignIn() {
        this.setState({isLogin: true});
    }

    render() {
        const loginTitleProps = {
            loginTitle: loginLabel.loginTitle,
            loginSubTitle: loginLabel.loginSubTitle
        }
        const loginContentProps = {
            email: this.state.email,
            password: this.state.password,
            onSignIn: this.onSignIn,
            loginEmailLabel: loginLabel.loginEmailLabel,
            loginEmailRemark: loginLabel.loginEmailRemark,
            loginEmailErrorMessage: loginLabel.loginEmailErrorMessage,
            loginPasswordLabel: loginLabel.loginPasswordLabel,
            loginPasswordRemark: loginLabel.loginPasswordRemark,
            loginPasswordErrorMessage: loginLabel.loginPasswordErrorMessage,
            loginButtonName: loginLabel.loginButtonName
        };
        return (
            <div className='login'>
                <LoginTitle {...loginTitleProps} />
                {!this.state.isLogin && <div className='login-tips'>Please sign in</div>}
                {this.state.isLogin && <div className='login-tips'>Welcome!</div>}
                <LoginContent {...loginContentProps} ref={this.loginContentRef} />
            </div>
        );
    }

    componentDidMount() {
        console.log('Login componentDidMount');
        this.loginContentRef.current.emailInputRef.current.focus();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Login componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Login componentWillUnmount');
    }
}

export default Login;
