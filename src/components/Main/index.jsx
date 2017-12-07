import React, { Component } from 'react'

import MessageList from '../MessageList'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      messages: [
        {text: 'mensaje de prueba'},
        {text: 'mensaje de prueba'}
      ]
    }
  }

  render() {
    return(
    <MessageList messages={this.state.messages}/>
    // <div>holaaaaaa</div>
    )
  }
}

export default Main