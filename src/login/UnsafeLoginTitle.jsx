import React from 'react';
import './scss/UnsafeLoginTitle.scss'

class UnsafeLoginTitle extends React.Component {

    UNSAFE_componentWillMount() {
        console.log('Unsafe Login Title Component WILL MOUNT!')
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('Unsafe Login Title Component WILL UPDATE!');

    }
    UNSAFE_componentDidUpdate(prevProps, prevState) {
        console.log('Unsafe Login Title Component DID UPDATE!')
    }
    UNSAFE_componentWillUnmount() {
        console.log('Unsafe Login Title Component WILL UNMOUNT!')
    }

    render() {
        const {
            Title,
            SubTitle
        } = this.props
        return (
            <div className='unsafe-login-title'>
                <h1 className='unsafe-login-header-title'>{Title}</h1>

                <h2 className='unsafe-login-sub-title'>{SubTitle}</h2>
            </div>
        );
    }
}

export default UnsafeLoginTitle;
