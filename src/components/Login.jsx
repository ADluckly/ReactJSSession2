import React from 'react';

import Title from './Title'
import Content from './Content'
import Footer from './Footer'
import '../scss/Login.scss'

class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email:"",
            password:"",
            isLogin:false
        }
        this.onSignIn = this.onSignIn.bind(this);
    }
    onSignIn() {
        this.setState({
            isLogin: true
        })
    }

    render() {
        const loginTitles = {
            loginTitle: 'Sign in to InVision',
            loginSubTitle: 'Enter your details below'
        }

        const loginContentProps = {
            loginErrorMsg: 'The email format is valid',
            loginPawError: 'Please use the correct password',
            loginEmailLabel: 'Email address',
            loginEmailRemarkLabel: 'Know your team domain?',
            loginPasswordLabel: 'Password',
            loginPasswordRemarkLabel: 'Forgot your password?',
            email: this.state.email,
            password: this.state.password,
            onSignIn: this.onSignIn
        }
        return(
            <div className='login'>
                {!this.state.isLogin && <div className='login-tips'>Please sign in</div>}
                {this.state.isLogin && <div className='login-tips'>Welcome!</div>}
                <Title {...loginTitles}/>
                <Content {...loginContentProps}/>
            </div>
        )
    }
}

export default Login;