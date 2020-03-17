import React, { Component } from 'react'

export default class LoginTitle extends Component {
    render() {
        return (
            <div>

                <h1>
                    <strong>
                        {this.props.content.loginTitleLabel}
                    </strong>
                </h1>
                <h2 style={{fontWeight:300}}>
                    {this.props.content.loginTitleLabelInfo}
                </h2>
            </div>
        )
    }
}
