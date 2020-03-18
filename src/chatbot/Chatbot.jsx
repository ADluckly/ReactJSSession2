import React from 'react';
import ChatbotHeader from './ChatbotHeader'
import ChatbotContent from './ChatbotContent'
import './scss/common.scss'

class Chatbot extends React.Component {
  state = {
    name: 'c.b.zhou'
  }
  constructor(props) {
    super(props)

    this.changNameParent = this.changNameParent.bind(this);

  }

  changNameParent() {
    this.setState({
      name: 'zc'
    })
  }

  render() {
    const headerProps = {
      name: this.state.name,
      changNameParent: this.changNameParent
    }

    return (
      <div className='chatbot'>
        <ChatbotHeader {...headerProps} />
        <ChatbotContent />
      </div>
    );
  }
}

export default Chatbot;
