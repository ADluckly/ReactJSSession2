import React from 'react';
import './scss/ChatbotHeader.scss'

class ChatbotFooter extends React.Component {
  render() {
    return (
      <div className="chatbot-footer content-align-right">
          <div className='chatbot-icon'>
              <div className='chatbot-img'>

              </div>
              <div className='chatbot-span'>
                  This is ChatbotFooter
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