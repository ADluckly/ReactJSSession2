import React from 'react';
import '../scss/loginTitle.scss'

export default class LoginTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loginTitle">


                <div className="login-top-title">
                    <h3>{this.props.loginTitle}</h3>

                </div>
                <div className="login-remender">
                    {!this.props.isLogin && <p>{this.props.loginDetailTitle}</p>}
                    {this.props.isLogin && <p>{this.props.loginWelcom}</p>}
                </div>
            </div>
        )
    }

}