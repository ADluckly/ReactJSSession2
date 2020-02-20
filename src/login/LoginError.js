import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/login.scss';

class LoginError extends React.Component{
    render (){
        return (
            <div className='login-error-msg'>
                The email format is valid
            </div>
        );
    }
}
export default LoginError;