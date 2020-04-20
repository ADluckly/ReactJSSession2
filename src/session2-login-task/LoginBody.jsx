import React, { Component } from 'react';
import styles from './scss/LoginBody.module.scss';

export default class LoginBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isEmailError: false
    }
  }

  handleInput = e => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState({
      [id]: value
    });
  };

  checkEmail = e => {
    this.handleInput(e);
  }

  checkEmailFormat = targetStr => {
    const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return emailReg.test(targetStr);
  }

  checkPwd = e => {
    this.handleInput(e);
  }

  submit = () => {
    // 1. check email format
    const emailVal = this.state.email;
    const pwdVal = this.state.password;
    const isEmailError = !this.checkEmailFormat(emailVal);
    this.setState({ isEmailError });

    // 2. check pwd is null or not
    const isPwdEmpty = pwdVal.length > 0;
    // 3. submit
    if (!isEmailError && isPwdEmpty) {
      const { email, password } = this.state;
      const submitData = {
        email,
        password,
        isPassAllValdation: true
      }
      this.props.onSubmit(submitData);
    } else {
      this.props.onSubmit({ isPassAllValdation: false });
    }
  }

  render() {
    const {
      loginEmailLabel,
      loginEmailRemarkLabel,
      loginEmailErrorLabel,
      loginPasswordLabel,
      loginPasswordRemarkLabel,
      loginBtnLabel
    } = this.props;

    const emailConfig = this.state.isEmailError ?
      { class: styles.emailErrorMsg, label: loginEmailErrorLabel } :
      { class: styles.emailRemark, label: loginEmailRemarkLabel }

    return (
      <div className={styles.container}>
        <div className={styles.email}>
          <label htmlFor="email" className={styles.loginLabel}>{loginEmailLabel}</label>
          <input id="email" className={styles.loginInput} value={this.state.email} onChange={this.checkEmail} />
          <div className={emailConfig.class}>{emailConfig.label}</div>
        </div>

        <div className={styles.password}>
          <div className={styles.pwdTitle}>
            <label htmlFor="password" className={styles.loginLabel}>{loginPasswordLabel}</label>
            <a href="#" className={styles.pwdRemark} onClick={e => e.preventDefault()}>
              {loginPasswordRemarkLabel}
            </a>
          </div>
          <input id="password" type="password" className={styles.loginInput} value={this.state.password} onChange={this.checkPwd} />
        </div>

        <div className={styles.loginBtn}>
          <button className={styles.loginBtnText} onClick={this.submit}>{loginBtnLabel}</button>
        </div>
      </div>
    )
  }
}
