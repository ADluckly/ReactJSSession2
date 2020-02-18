import React from 'react';
import './scss/LoginTitle.scss'

class LoginTitle extends React.Component {

    // UNSAFE_componentWillMount() {
    //     console.log('Login Title Component WILL MOUNT!')
    // }
    componentDidMount() {
        console.log('Login Title Component DID MOUNT!')
    }
 
    // UNSAFE_componentWillUpdate(nextProps, nextState) {
    //     console.log('Login Title Component WILL UPDATE!');
    // }
    componentDidUpdate(prevProps, prevState) {
        console.log('Login Title Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Login Title Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div className='login-title'>
                <h1 className='login-header-title'>Sign in to InVision</h1>
                <h2 className='login-sub-title'>Enter your details below</h2>
            </div>
        );
    }
}

export default LoginTitle;
