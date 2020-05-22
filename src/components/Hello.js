import React from 'react'

/*
// JSX
const Hello = () => {
    return (
        <div className='dummyClass'>
            <h1>Hello Sid</h1>
        </div>
    )
}
*/

// non JSX
 const Hello = () => {
     return React.createElement('div',
     {id: 'hello', className: 'dummyClass'},
     React.createElement('h1', null, 'Hello Sid!'))
 }

export default Hello