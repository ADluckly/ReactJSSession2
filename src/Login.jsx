import React from 'react';
import Title from './Title';
import Content from "./Content";
import './Login.scss';

const lables = {
    title: "Sign in to InVision",
    tip: "Enter your detail below",
    email: "Email address",
    emailDomain: "Know your email domain?",
    correctEmail: "Know your team domain?",
    incorrectEmail: "That format doestn't look right. Make sure there aren't any typos.",
    emptyPassword: "Password can not be empty!",
    password: "Password",
    forgotPassword: "Forgot your password",
    haveSignIn: "Welcome",
    notSignIn: "please sign in"
}

class Login extends React.Component{
    render(){
        return (
            <div className='login'>
                <Title {...lables}/>
                <Content {...lables}/>
            </div>
            
        );
    }
}

export default Login;