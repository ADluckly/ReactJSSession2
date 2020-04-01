import React from 'react'
import './SignInBody.scss'

export default class SignInBody extends React.Component {
    render() {
        return (
            <div className='signin-body'>
                <div className='signin-field'>
                    <label htmlFor='email'>{this.props.emailLabel}</label>
                    <div className='input-field'>
                        <input
                            type='text'
                            className='field-input'
                            name='email'
                            id='email'
                            value={this.props.email}
                            onChange={this.props.onChangeInput}
                        />
                    </div>
                    {this.props.hasError?
                    <div className="error-text">That format doesn't look right. Make sure there aren't any typos.</div>:<div></div>
                    }
                </div>
                <div className='signin-field'>
                    <label htmlFor='password'>{this.props.passwordLabel}</label>
                    <div className='input-field'>
                        <input
                            type='text'
                            className='field-input'
                            name='password'
                            id='password'
                            value={this.props.password}
                            onChange={this.props.onChangeInput}
                        />
                    </div>
                    <button type='button' className="button-to-text">{this.props.forgotPasswordLabel}</button>
                </div>
                <div className='signin-button'>
                    {(this.props.email !== '' && this.props.password !== '' && !this.props.hasError) ?
                        <button className='field-button' onClick={this.props.onSignIn}>{this.props.signInButtonLabel}</button> :
                        <button className='field-button' onClick={this.props.onSignIn} disabled>{this.props.signInButtonLabel}</button>
                    }
                </div>
            </div>
        )
    }
}
