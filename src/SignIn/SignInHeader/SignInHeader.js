import React from 'react'
import './SignInHeader.scss'

function SignInHeader(props) {
    return (
        <div className='header'>
            <div className='title'>{props.title}</div>
            <div className='description'>{props.description}</div>
        </div>
    )
}

export default SignInHeader;