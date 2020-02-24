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
