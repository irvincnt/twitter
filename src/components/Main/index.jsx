import React, { Component } from 'react'

import MessageList from '../MessageList'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      openText: false,
      messages: [
        {
          text: 'mensaje de prueba',
          picture: 'https://pbs.twimg.com/profile_images/827790443152805888/hy08L7YR_bigger.jpg',
          displayName: 'Irvin Contreras',
          username: 'irvincnt',
          date: Date.now() - 1800000
        },
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

  handlerOpenText(event) {
    event.preventDefault();
    this.setState({ openText: true }) //cambiamos el estado de openText
  }

  render() {
    return(
      <div>
        <ProfileBar
          picture={this.props.user.photoURL}
          username={this.props.user.email.split('@')[0]}
          onOpenText={this.handlerOpenText}
        />
        <MessageList messages={this.state.messages}/>
      </div>
    )
  }
}

export default Main
