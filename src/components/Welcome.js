// class component
// use this keyword to access props

import React , { Component } from 'react'

class Welcome extends Component {
    render() {
        // desctructre props
        const {name, heroName} = this.props
        
        // destructure state
        // const {state1, state2} = this.state
        return (
            // <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
            <h1>Welcome {name} a.k.a {heroName}</h1>
        ) 
    }
}

export default Welcome;