import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment() {
        /*
        // this.state.count = this.state.count + 1      // do not modify state directly, use setState
        this.setState({
            count: this.state.count + 1
        }, () => {console.log('callback value', this.state.count)})     // callback function, asynchronous, place TODO in callback function after state change
        console.log(this.state.count)       // synchronous
        */
       this.setState((prevState) => ({      // use function as parameter in setState to get previous state of component
           count: prevState.count + 1
       }), () => {console.log('callback value', this.state.count)})
       console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
