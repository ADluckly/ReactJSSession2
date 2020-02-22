import React from 'react';
import '../scss/Footer.scss'

class Footer extends React.Component{



    render() {
        return (
            <div className='login-title'>
                <div className='login-button content-align'>
                    <button className='login-button-text' onClick={this.onSignIn}>
                        Sign in
                    </button>
                </div>
                <div className='login-clear-button content-align'>
                    <button className='login-clear-button-text' onClick={this.onClearClick}>
                        Clear
                    </button>
                </div>
            </div>
        );
    }
}
export default Footer;