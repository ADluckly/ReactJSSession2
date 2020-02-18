import React from 'react';

import LoginTitle from './LoginTitle'
import LoginContent from './LoginContent'

import './scss/Login.scss'
import '../lib/scss/common.scss'

class Login extends React.Component {
    state = {
        email: 'AD',
        password: '123456'
    }
    constructor(props) {
        super(props)
        this.onClearClick = this.onClearClick.bind(this);
    }
    onClearClick() {
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        const loginContentProps = {
            email: this.state.email,
            password: this.state.password
        }
        return (
            <div className='login'>
                <LoginTitle />
                <LoginContent {...loginContentProps} />
                <div className='login-clear-button content-align'>
                    <button className='login-clear-button-text' onClick={this.onClearClick}>
                        Clear
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;
