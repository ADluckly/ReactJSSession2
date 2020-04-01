import React from 'react';
import ChatbotHeader from './ChatbotHeader'
import ChatbotContent from './ChatbotContent'
import './scss/common.scss'

class Chatbot extends React.Component {
  state = {
    name: 'Joey'
  }
  constructor(props) {
    super(props)

    this.changNameParent = this.changNameParent.bind(this);

  }

  changNameParent() {
    this.setState({
      name: 'Weibin'
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
