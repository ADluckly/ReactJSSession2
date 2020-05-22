import React from 'react';
import LoginTitle from './LoginTitle';
import LoginContent from './LoginContent';
import '../scss/login.scss';

const loginMsg ={
    loginTitle:"Sign in to InVision",
    loginDetailTitle:"Enter your details below",
    loginWelcom: "Welcom",
    loginTeam:"Know your team domain?",
    loginEmailError: "Your email address is invalid",
    loginEmailLable:"Email address",
    loginPasswordLable:"Password",
    loginPasswordReminder:"Forget Your Pasword?",
    loginSingin:"Sign in"
}

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emai: '',
            password: '',
            isLogin: false
        }
    }

    isLogin = ()=>{
        this.setState({
            isLogin : true
        },()=>{console.log(this.state);})

    }

    render() {

        const loginTitleMsg = {
            loginTitle: loginMsg.loginTitle,
            loginDetailTitle: loginMsg.loginDetailTitle,
            loginWelcom : loginMsg.loginWelcom,
            isLogin : this.state.isLogin
        }

        const loginContentMsg = {
            loginTeam: loginMsg.loginTeam,
            loginEmailError: loginMsg.loginEmailError,
            loginEmailLabel : loginMsg.loginEmailLable,
            loginPasswordLabel: loginMsg.loginPasswordLable,
            loginPasswordReminder: loginMsg.loginPasswordReminder,
            loginSingin : loginMsg.loginSingin,
            loginState : this.state.isLogin,
            isLogin: this.isLogin
        }
        return (
            <div className="login">
                
                <div >
                    <LoginTitle {...loginTitleMsg}/>
                    <LoginContent {...loginContentMsg}/>
                </div>

            </div>
        )
    }

}