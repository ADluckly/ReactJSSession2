import React from 'react';
import "./Content.scss";
import $ from "jquery";

class Content extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            emailStyle: {"border-width": "medium"},
            passwordStyle: {"border-width": "medium"}
        }
        //this.validateEmail = this.validateEmail.bind(this);
    }

    componentDidMount(){
        this.refs.emailInput.focus();
    }

    validateEmail = () => {
        const re=/^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
        const value = $(".email-input").val();
        if(re.test(value)) {
            $(".incorrect-email").hide();
            $(".correct-email").show();
            return true;
        }else {
            $(".correct-email").hide();
            $(".incorrect-email").show();
            return false;
        }
    }

    validatePassword = () => {
        if($(".password-input").val().length > 0) {
            $(".empty-password").hide();
            return true;
        } else{
            $(".empty-password").show();
            return false;
        }
    }

    signIn = () => {
        const validEmail = this.validateEmail();
        this.validateEmail() && this.validatePassword() && alert("welcome");
    }

    render(){
        return (
            <div className='content'>
                <div className='email'>
                    <span>{this.props.email}</span>
                    <input type="text" ref='emailInput' className='email-input' onChange={this.validateEmail}/>
                    <span className='correct-email'>{this.props.correctEmail}</span>
                    <span className='incorrect-email'>{this.props.incorrectEmail}</span>
                </div>
                <div className='password'>
                    <div className='password-label'>
                        <span>{this.props.password}</span>
                        <span className='forgot-password'>{this.props.forgotPassword}</span>
                    </div>
                    <input type="text" ref='passwordInput' className='password-input' onChange={this.validatePassword}/>
                    <span className='empty-password'>{this.props.emptyPassword}</span>
                </div>
                <div className="sign-in">
                    <button onClick={this.signIn}>Sign in</button>
                </div>
            </div>
        );
    }
}

export default Content;