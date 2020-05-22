import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)        // binding in constructor is best practice
    }
    
    // event handler
    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }

    // using arrow function as class property
    clickHandler = () => {
        this.setState({
            message: "Goodbye!"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click me</button> */}
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default EventBind
