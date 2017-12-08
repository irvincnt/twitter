import React, { Component } from 'react'
import moment from 'moment'
import styles from './message.css'

class Message extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className={styles.root}>
        <div className={styles.user}>
          <figure>
            <img className={styles.avatar} src={this.props.picture}></img>
          </figure>
          <span className={styles.displayName}>{this.props.displayName}</span>
          <span className={styles.username}>{this.props.username}</span>
          <span className={styles.date}>{moment(this.props.date).fromNow()}</span>
        </div>
        <h3>{this.props.text}</h3>
        <div className={styles.buttons}>
          <div className={styles.icon}><span className="fa fa-reply"></span></div>
          <div className={styles.icon}><span className="fa fa-retweet"></span></div>
          <div className={styles.icon}><span className="fa fa-star"></span></div>
        </div>
      </div>
    )
  }
}

export default Message
