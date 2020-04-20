import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Login from './login/Login'

import Test from './test/Test'

import LoginContainer from './session2-login-task/LoginContainer'

// ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<LoginContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
