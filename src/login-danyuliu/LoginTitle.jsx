import React from 'react';

import '../common/scss/Common.scss'
import './scss/LoginTitle.scss'

class LoginTitle extends React.Component {
    render() {
        const {loginTitle, loginSubTitle} = this.props;

        return (
            <div className="login-title flex-start-colum">
                <h2 className="login-header-title">{loginTitle}</h2>
                <h4 className="login-sub-title">{loginSubTitle}</h4>
            </div>
        );
    }
}

export default LoginTitle;