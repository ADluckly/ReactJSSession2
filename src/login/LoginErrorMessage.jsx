import React from 'react';
import './scss/LoginErrorMessage.scss';

class LoginErrorMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login-error-message'>
                {this.props.message}
            </div>
        );
    }
}

export default LoginErrorMessage;
