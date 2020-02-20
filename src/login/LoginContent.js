import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/login.scss';
import LoginError from './LoginError';

class LoginContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isEmailError: false,
            isSign: false
        }
    }

    onSignIn(){
        let isSign = false;
        if (!this.isInValidValue(this.state.email) && !this.isInValidValue(this.state.password) && !this.state.isEmailError) {
            isSign = true;
        }

        this.setState({
            isSign: isSign
        });
    
    }

    isInValidValue(text) {
        if (text !== undefined && text != null && text !== '') {
            return false
        } else {
            return true
        }
    }

    onChangeEmailValue(e) {
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        let isEmail = !reg.test(e.target.value) ? true : false;
        this.setState({
            email: e.target.value,
            isEmailError: isEmail
        });
        this.onSignIn();
    }

    onChangePasswordValue(e){
        this.setState({
            password: e.target.value
        });
    
        this.onSignIn();
    }

    render (){
        const {
            loginEmailLabel,
            loginEmailRemarkLabel,
            loginPasswordLabel,
            loginPasswordRemarkLabel,
            loginButton,
        } = this.props
        return (
            <div>
                <div className="form-group">
                    <label>{loginEmailLabel}</label>
                    <input name='email' type='text' className="form-control" value={this.state.email} onChange={this.onChangeEmailValue.bind(this)}></input>
                    {this.state.isEmailError && <LoginError />}
                    {!this.state.isEmailError && <div className="login-email-remark">{loginEmailRemarkLabel}</div>}
                </div>

                <div className="form-group">
                    <div className="content-align-right">
                        <label>{loginPasswordLabel}</label>
                        <div>{loginPasswordRemarkLabel}</div>
                    </div>
                    <input name='password' type='text' className="form-control" value={this.state.password} onChange={this.onChangePasswordValue.bind(this)}></input>
                </div>
                <button className="btn btn-lg btn-danger btn-block" disabled={!this.state.isSign && "disabled"}>{loginButton}</button>
            </div>
        );
    }
}
export default LoginContent;