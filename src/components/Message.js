// state

import React , { Component } from 'react'

class Message extends Component {
    // constructor
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    // handler to change state
    changeMessage() {
        this.setState({
            message: 'Thanks for subscribing!'
        })
    }

    render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
    )
    }
}

export default Message;