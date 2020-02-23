import React from 'react';

import './scss/LoginTitle.scss'

class LoginTitle extends React.Component {
    render() {
        return (
            <div className="login-title">
                <h2 className="login-header-title">{this.props.loginTitle}</h2>
                <h4 className="login-sub-title">{this.props.loginSubTitle}</h4>
            </div>
        );
    }
}

export default LoginTitle;