import React from 'react';
import './scss/CommonBtn.scss'

class CommonBtn extends React.Component {
    render() {
        const { onSignIn, buttonName, isButtonDisabled } = this.props

        return (
            <div className='common-button'>
                <button className='common-button-text' onClick={onSignIn} disabled={isButtonDisabled}>{buttonName}</button>
            </div>
        );
    }
}

export default CommonBtn;
