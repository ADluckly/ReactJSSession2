import React from 'react';
import './scss/LoginTitle.scss'

class LoginTitle extends React.Component {

    componentDidMount() {
        console.log('Login Title Component DID MOUNT!')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Login Title Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Login Title Component WILL UNMOUNT!')
    }

    render() {
        const {
            Title,
            SubTitle
        } = this.props
        return (
            <div className='login-title'>
                <h1 className='login-header-title'>{Title}</h1>

                <h2 className='login-sub-title'>{SubTitle}</h2>
            </div>
        );
    }
}

export default LoginTitle;
