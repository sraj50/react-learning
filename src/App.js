import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Greet } from './components/Greet'   // named import
import Greet from './components/Greet'          // default import
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

class App extends Component {
  render() {
    return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Super Man">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman"></Greet> */}
      {/* <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Clark" heroName="Super Man"></Welcome>
      <Welcome name="Diana" heroName="Wonder Woman"></Welcome> */}
      {/* <Hello></Hello> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      <EventBind></EventBind>
    </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>Hello Sid here!</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
