import React from 'react';
import './scss/LoginTitle.scss'

class LoginTitle extends React.Component {

    render() {
        const {
            loginTitle,
            loginSubTitle
        } = this.props
        return (
            <div className='login-title'>
                <h1 className='login-header-title'>{loginTitle}</h1>

                <h2 className='login-sub-title'>{loginSubTitle}</h2>
            </div>
        );
    }
}

export default LoginTitle;
