import React from 'react';
import './scss/CommonButton.scss'

class CommonButton extends React.Component {

    // componentDidMount() {
    //     debugger;
    //     console.log('Login Title Component DID MOUNT!')
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     debugger;
    //     console.log('Login Title Component DID UPDATE!')
    // }
    // componentWillUnmount() {
    //     debugger;
    //     console.log('Login Title Component WILL UNMOUNT!')
    // }
    
    render() {
        const { onSignIn, buttonName, isButtonDisabled } = this.props

        return (
            <div className='common-button flex-align-center'>
                <button className='common-button-text' onClick={onSignIn} disabled={isButtonDisabled}>{buttonName}</button>
            </div>
        );
    }
}

export default CommonButton;
