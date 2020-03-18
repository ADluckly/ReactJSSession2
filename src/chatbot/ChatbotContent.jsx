import React from 'react';
import './scss/ChatbotHeader.scss'

class ChatbotContent extends React.Component {
  render() {
    return (
      <div className="chatbot-header content-align-right">
          <div className='chatbot-icon'>
              <div className='chatbot-img'>

              </div>
              <div className='chatbot-span'>
                  this is ChatbotContent
              </div>
          </div>
          <div className='chatbot-closs'>
              c.b.zhou
          </div>
      </div>
    );
  }
}

export default ChatbotContent;
