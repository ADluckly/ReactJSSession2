import React from 'react';
import './scss/LoginErrorMessage.scss'

class LoginErrorMessage extends React.Component {
    render() {
        return (
            <div className='login-error-msg'>
                The email format is valid
            </div>
        );
    }
}

export default LoginErrorMessage;
