import React from 'react';
import '../scss/loginContent.scss'
import LoginError from './loginError';

var emailStatus = true;
var disableStatus = "disabled";
export default class LoginContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
        this.signinBtnRef = React.createRef();

    }

    isEmail = (email) => {

        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (reg.test(email)) {
            emailStatus = true;

        } else {
            emailStatus = false;
        }
    }

    isEmailInvalid = (value) => {
        if (null == value || "" == value) {

        }
    }

    changeButtonDisabeldStatus(password,emailStatus){
        if(password && emailStatus){
            disableStatus = "";
        }
    }



    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

        if ("email" === e.target.name) {
            this.isEmail(e.target.value)
        }

        this.changeButtonDisabeldStatus(this.state.password,emailStatus)

    }


    handleClick = () => {
        this.props.isLogin();

    }

    render() {
        return (
            <div className="loginContent">
                <div >
                    <label className="login-label">{this.props.loginEmailLabel}</label>
                    <input className="form-control" name="email" type="email" value={this.state.email} onChange={this.handleChange} ></input>
                    {this.ifEmail && <p>That format doesn't look rigth.Make sure there are't any typos.</p>}
                </div>
                <div>
                    {emailStatus && <div className="login-email-reminder"><p>{this.props.loginTeam}</p></div>}
                    {!emailStatus && <LoginError/>}
                </div>

                <div >
                    <div>
                        <label className="login-label">{this.props.loginPasswordLabel}</label>
                        <p className="login-password-reminder">{this.props.loginPasswordReminder}</p>
                    </div>
                    <div className="login-input">
                        <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    </div>

                </div>
                <div className="login-button-align">
                    <button type="button" ref={this.signinBtnRef} className="login-button-align login-button" disabled={disableStatus} onClick={this.handleClick}>{this.props.loginSingin}</button>
                </div>
            </div>
        )
    }

}

