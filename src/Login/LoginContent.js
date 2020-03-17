import React, { Component } from 'react'
import { Button, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './scss/content.scss'
export default class LoginContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            emailErrorInfo: '',
            emailErrorStatus: false,
            passwordErrorStatus:true,
        }
        this.onChangeEmailStatus = this.onChangeEmailStatus.bind(this);
        this.onChangePasswordStatus = this.onChangePasswordStatus.bind(this);
        this.onSign = this.onSign.bind(this);
    }
    onChangeEmailStatus(e){
        const email = e.target.value;
        if(email){
            const reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
        if(!reg.test(email)){
            this.setState({
                emailErrorStatus:true,
                emailErrorInfo:'Email format is incorrect, please re-enter'
            })
        }else{
            this.setState({
                emailErrorStatus:false,
            })
        }
        }else{
            this.setState({
                emailErrorStatus:true,
                emailErrorInfo:'email cannot be empty',
            })
        }
        
    }
    onChangePasswordStatus(e){
        const password = e.target.value;
        if(password){
            this.setState({
                passwordErrorStatus:false,
            })
        }else{
            this.setState({
                passwordErrorStatus:true,
            })
        }
    }
    onSign(){
        
    }
    render() {

        return (
            <div className="content">
                <div className="form-control">
                    <div className="label">
                        <label htmlFor="email">{this.props.content.loginFromEmailTitle}</label>
                    </div>
                    <Input placeholder="email" id="email" allowClear onChange={this.onChangeEmailStatus} prefix={<UserOutlined />} />
                    <span className="info">{this.props.content.loginFromEmailInfo}</span>
                    {this.state.emailErrorStatus && <p className="error-info">{this.state.emailErrorInfo}</p>}
                </div>
                <div className="form-control">
                    <div className="label">
                        <label htmlFor="password">{this.props.content.loginFromPasswordTitle}</label>
                        <span className="label-info">{this.props.content.loginFromPasswordLabelInfo}</span>
                        <div style={{clear:"both"}}></div>
                    </div>
                    <Input.Password size="default" id="password" placeholder="password" onChange={this.onChangePasswordStatus} prefix={<LockOutlined />} />
                </div>
                <div className="btn">
                    <Button type="primary" shape="round" size="large" onClick={this.onSign} disabled={this.state.passwordErrorStatus || this.state.emailErrorStatus}>{this.props.content.loginFromButton}</Button>
                </div>
            </div>
        )
    }
}
