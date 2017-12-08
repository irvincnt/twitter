import React, { Component } from 'react'

import MessageList from '../MessageList'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      messages: [
        {
          text: 'mensaje de prueba',
          picture: 'https://pbs.twimg.com/profile_images/827790443152805888/hy08L7YR_bigger.jpg',
          displayName: 'Irvin Contreras',
          username: 'irvincnt',
          date: Date.now() - 180000
        }
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
