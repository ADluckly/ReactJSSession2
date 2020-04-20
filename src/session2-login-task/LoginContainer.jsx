import React, { Component } from 'react';
import LoginHeader from './LoginHeader';
import LoginBody from './LoginBody';
import loginLabelJson from './loginLabel.config';
import './scss/LoginContainer.scss'

export default class LoginContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLogin: false,
      pageLabel: {}
    }
  }

  componentDidMount() {
    new Promise(resolve => {
      setTimeout(() => {
        console.log('Fetch label json...');
        resolve(loginLabelJson); // mocking fetch the labelJson from api
      }, 500);
    }).then(res => {
      this.setState({ pageLabel: res });
      console.log('Fetch label json done');
    });
  }

  onSignIn = data => {
    const { email = '', password = '', isPassAllValdation } = data;
    const signInData = {
      email,
      password,
      isLogin: isPassAllValdation
    };
    this.setState(signInData, () => console.log(this.state));
  }

  render() {
    const headerLabelJson = this.state.pageLabel.loginHeaderLabelJson;
    const bodyLabelJson = this.state.pageLabel.loginBodyLabelJson;
    const loginHeaderProps = { ...headerLabelJson };
    const loginBodyLabelProps = { ...bodyLabelJson };

    return (
      <div className='container'>
        <LoginHeader {...loginHeaderProps} isLogin={this.state.isLogin} />
        <LoginBody {...loginBodyLabelProps} onSubmit={this.onSignIn} />
      </div>
    )
  }
}
