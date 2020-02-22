import React from 'react';
import './scss/ErrorMessage.scss'

class ErrorMessage extends React.Component {
    render() {
        const {
            errorMsg
        } = this.props

        return (
            <div className='error-msg'>{errorMsg}</div>
        );
    }
}

export default ErrorMessage;
