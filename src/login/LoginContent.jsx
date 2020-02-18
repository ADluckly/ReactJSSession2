import React from 'react';
import './scss/LoginContent.scss'
import '../lib/scss/common.scss'

class LoginContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }


    // UNSAFE_componentWillMount() {
    //     console.log('Login Content Component WILL MOUNT!')
    // }
    componentDidMount() {
        // this.state = {
        //     email: 'ADChange',
        //     password: '123456789'
        // }
        this.setState({
            email: 'ADChange',
            password: '123456789' 
        })
        console.log('Login Content Component DID MOUNT!')
    }
    // componentWillReceiveProps(newProps) {
    //     this.setState({
    //         email: newProps.email,
    //         password: newProps.password
    //     })
    //     console.log('Login Content Component WILL RECEIVE PROPS!')
    // }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('=============================================')
        console.log('Login Content get Derived State From Props!')
        if (prevState !== nextProps) {
            return {
                email:nextProps.email,
                password:nextProps.password
            };
        }

        // Return null to indicate no change to state.
        return null;
    }

    // UNSAFE_componentWillUpdate(nextProps, nextState) {
    //     console.log('Login Content Component WILL UPDATE!');
    // }
    componentDidUpdate(prevProps, prevState) {
        console.log('Login Content Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Login Content Component WILL UNMOUNT!')
    }

    onChangeValue() {

    }

    render() {
        console.log('Login Content Render!')
        return (
            <div className='login-content'>
                <div className='login-email'>
                    <label className='login-label'>Email address</label>
                    <div className='login-email-operation'>
                        <input name='email' type='text' className='login-input' value={this.state.email} onChange={this.onChangeValue}></input>
                    </div>
                    <div className='login-email-remark'>
                        Know your team domain?
                   </div>
                </div>
                <div className='login-password'>
                    <div className='content-align-right'>
                        <label className='login-label'>Password</label>
                        <label className='login-label-remark'>Forgot your password?</label>
                    </div>
                    <div className='login-email-operation'>
                        <input name='email' type='text' className='login-input' value={this.state.password} onChange={this.onChangeValue}></input>
                    </div>
                </div>
                <div className='login-button content-align'>
                    <button className='login-button-text'>
                        Sign in
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginContent;
