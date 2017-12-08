import React, { Component } from 'react'
import Message from '../Message'

class MessageList extends Component{
    constructor(props) {
        super(props)
    }

    render() {
      return(
        <div>
          {this.props.messages.map((msj, index) => {
            return(
              <Message
                key={index}
                text={msj.text}
                picture={msj.picture}
                displayName={msj.displayName}
                username={msj.username}
                date={msj.date}
              />
            )
          })}
        </div>
      )
    }
}

export default MessageList
