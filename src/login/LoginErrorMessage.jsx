import React from 'react';
import './scss/LoginErrorMessage.scss'

class LoginErrorMessage extends React.Component {
    componentDidMount() {
        console.log('Login Error Message Component DID MOUNT ===!')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Login Error Message Component DID UPDATE====!')
    }
    componentWillUnmount() {
        console.log('Login Error Message Component WILL UNMOUNT====!')
    }
    render() {
        return (
            <div className='login-error-msg'>
                The email format is valid
            </div>
        );
    }
}

export default LoginErrorMessage;
