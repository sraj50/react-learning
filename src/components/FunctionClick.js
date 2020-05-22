// event handling function component

import React from 'react'

function FunctionClick() {

    // event handler
    function clickHandler() {
        console.log('button clicked!')
    }

    // event handler is a function (without paranthesis), not a function call (with paranthesis)
    return (
        <div>
            <button onClick={clickHandler}>Click</button>         
        </div>
    )
}

export default FunctionClick
