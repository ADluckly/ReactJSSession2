import React from 'react';
import ErrorMessage from './ErrorMessage';

import './scss/CommonInput.scss'

class CommonInput extends React.Component {

    render() {
        const {
            name,
            label,
            inputType,
            inputRef,
            isShowHeaderRearkLabel,
            headerRemarkLabel,
            isShowBottomRearkLabel,
            bottomRemarkLabel,
            onChangeInput,
            errorMsg
        } = this.props

        return (
            <div className="common-input flex-start-colum">
                <div className='flex-space-between'>
                    <label>{label}</label>
                    {isShowHeaderRearkLabel && <label className='common-input-top-remark'>{headerRemarkLabel}</label>}
                </div>
                <div className="common-input-input-box">
                    <input name={name} type={inputType} ref={inputRef} onChange={onChangeInput}></input>
                </div>
                {isShowBottomRearkLabel && <ErrorMessage errorMsg={errorMsg}/>}
                {!isShowBottomRearkLabel && <div className='common-input-bottom-remark'>
                    {bottomRemarkLabel}
                </div>}
            </div>
        );
    }
}

export default CommonInput;