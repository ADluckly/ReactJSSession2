import React from 'react';
function LoginTitle(props){
    return (
      <div className="login-title">
        <h1 className="login-header-title">{props.loginTitle}</h1>
        <h2 className="login-sub-title">{props.loginSubTitle}</h2>
      </div>
    );
  }

export default LoginTitle;