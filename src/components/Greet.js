// functional component

import React from 'react'

// function Greet() {
//     return <h1>Hello Sid!</h1>
// }

// named export
// export const Greet = () => <h1>Hello Sid!</h1>


// ES6
// destructuring props
// const Greet = ({name, heroName}) => {
//     // console.log(props)
// return (
//     <div>
//         {/* <h1>Hello {props.name} a.k.a {props.heroName}</h1> */}
//         <h1>Hello {name} a.k.a {heroName}</h1>
//         {/* {props.children} */}
//     </div>
    
//     )
// }

// destructuring in body
const Greet = (props) => {
    // console.log(props)
    const {name, heroName} = props
return (
    <div>
        {/* <h1>Hello {props.name} a.k.a {props.heroName}</h1> */}
        <h1>Hello {name} a.k.a {heroName}</h1>
        {/* {props.children} */}
    </div>
    
    )
}


// default export
export default Greet;