import React from 'react';

class LoginContent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isEmailError: true,
      isLogin: false
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.onChangeEmailValue = this.onChangeEmailValue.bind(this);
  }

  handleClick(e){
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prestate) => ({
      [name]: value
    }))
  }
  
  onChangeValue(e){
    this.handleClick(e);
  }

  onChangeEmailValue(e){
    this.handleClick(e);
    const reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
    let isEmailError = true;
    if(!reg.test(e.target.value)){
      isEmailError = false;
    }
    this.setState({
      isEmailError
    })
  }

  isInValidValue(text){
    if(text !== undefined && text !== null && text !== ''){
      return true;
    }else{
      return false;
    }
  }

  onSignIn(){
  }

  render(){
    const {
      loginEmailLabel,
      loginEmailRemarkLabel,
      loginPasswordLabel,
      loginPasswordRemarkLabel,
      loginButton
    } = this.props;
    return(
      <div className="login-content">
        <div className="login-email">
          <label className="login-label">{loginEmailLabel}</label>
          <div className="login-email-operation">
            <input name="email" ref='emailInput' type="text" className="login-input" value={this.state.email} onChange={this.onChangeEmailValue}/>
          </div>
          {this.state.isEmailError && <div className="login-email-remark">{loginEmailRemarkLabel}</div>}
          {!this.state.isEmailError && 
            <div className='login-error-msg'>
              The email format is valid
            </div>
          }
        </div>
  
        <div className="login-password">
          <div className="login-password-label">
        <label className="login-label">{loginPasswordLabel}</label>
            <label className="login-label-remark">{loginPasswordRemarkLabel}</label>
          </div>
          <input name="password" ref="passwordInput" type="password" className="login-input" value={this.state.password} onChange={this.onChangeValue}/>
        </div>
  
        <button className="login-button " onClick={this.onSignIn} disabled={this.isInValidValue(this.state.email) && this.isInValidValue(this.state.passwor)&&this.state.isEmailError}>{loginButton}</button>
      </div>
    )
  }
}

export default LoginContent;
