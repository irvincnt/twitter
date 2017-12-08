import React, { Component } from 'react'
import 'normalize-css'
import style from './app.css'

import  Header from '../Header'
import  Main from '../Main'


class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        text: 'mensaje de prueba',
        photoURL: 'https://pbs.twimg.com/profile_images/827790443152805888/hy08L7YR_bigger.jpg',
        displayName: 'Irvin Contreras',
        email: 'irvincnt@gmail.com',
        date: Date.now() - 1800000,
        onOpenText: false
      }
    }
  }

  render() {
    return(
      <div>
        <Header/>
        <Main user={this.state.user}/>
      </div>
    )
  }
}

export default App
