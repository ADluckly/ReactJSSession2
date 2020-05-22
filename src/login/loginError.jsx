import React from 'react';
import '../scss/loginError.scss';

export default class LoginError extends React.Component{
    render(){
        return(
            <div className="loginError">
                <p>That format doesn't look rigth.Make sure there are't any typos.</p>
            </div>
        )
    }
}