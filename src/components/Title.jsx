import React from 'react'
import '../scss/Title.scss'

class Title extends React.Component{

    render() {
        const {
            loginTitle,
            loginSubTitle
        } = this.props
        return (
            <div className='login-title'>
                <h1 className='login-header-title'>{loginTitle}</h1>
                <h2 className='login-sub-title'>{loginSubTitle}</h2>
            </div>
        );
    }

}

export default Title