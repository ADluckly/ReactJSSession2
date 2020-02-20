import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/login.scss';

class LoginTitle extends React.Component{
    render (){
        const {
            loginTitle,
            loginSubTitle
        } = this.props
        return (
            <div>
                <h1 className="login-title">{loginTitle}</h1>
        <h2 className="login-sub-title">{loginSubTitle}</h2>
            </div>
        );
    }
}
export default LoginTitle;