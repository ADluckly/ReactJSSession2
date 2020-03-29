import * as React from 'react';
import './App.css';

class AccountInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return(
      <div>
        <p className="account-title">Email address</p>
        <input className="account-input" onChange={this.props.handleChange} placeholder="caiweipeng@yeah.net" />
        <p className="account-error">{this.props.error}</p>
      </div>
    )
  }
}

class PasswordInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div>
        <p className="password-title">
          <span className="first-title">Password</span>
          <span className="second-title">Forgot your password?</span>
        </p>
        <input className="password-input" onChange={this.props.handleChange} placeholder="!Abcd1234" />
      </div>
    )
  }
}

class LoginButton extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div>
        <button className="login-button" disabled={this.props.data}>Sign in</button>
      </div>
    )
  }
}

class App extends React.Component<any, any> {
  public errorMsg: any;
  constructor(props: any) {
    super(props);
    this.validAccount = this.validAccount.bind(this);
    this.validPassword = this.validPassword.bind(this);
    this.state = {
      account: '',
      isAccount: true,
      isPassword: true,
      password: ''
    }
  }

  public validAccount(e: any) {
    const value = e.target.value;
    const emailStr = new RegExp('^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$');
    this.setState({
      account: value
    });
    if (emailStr.test(value)) {
      this.setState({
        isAccount: false
      });
      this.errorMsg = '';
    } else {
      this.setState({
        isAccount: true
      })
      this.errorMsg = `The format doesn't look right. Make sure there aren't any typos`;
    }
  }

  public validPassword(e: any) {
    const value = e.target.value;
    this.setState({
      password: value
    });

    if (value) {
      this.setState({
        isPassword: false
      });
    } else {
      this.setState({
        isPassword: true
      });
    }
  }

  public render() {
    return (
      <div className="App">
        <div className="App-body">
          <header className="App-header">
            <h1>Sign in to InVision</h1>
            <h2>Enter your details below</h2>
          </header>
          <AccountInput value={this.state.account} handleChange={this.validAccount} error={this.errorMsg} />
          <PasswordInput value={this.state.password} handleChange={this.validPassword} />
          <LoginButton data={this.state.isAccount || this.state.isPassword} />
        </div>
      </div>
    );
  }
}

export default App;
