import React from 'react';
import './scss/ChatbotHeader.scss'

class ChatbotHeader extends React.Component {
    constructor(props) {
        super(props)
        this.changName = this.changName.bind(this);
    }
    changName() {
        this.props.changNameParent();
    }
    render() {
        return (
            <div className="chatbot-header content-align-right">
                <div className='chatbot-icon'>
                    <div className='chatbot-img'>
                    </div>
                    <div className='chatbot-span'>
                        {this.props.name}
                    </div>
                </div>
                <div className='chatbot-closs'>
                    <button onClick={this.changName}>ChangeName</button>
                </div>
            </div>
        );
    }
}

export default ChatbotHeader;
