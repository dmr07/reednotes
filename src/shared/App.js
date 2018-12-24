// shared folder. uses a switch from react-router-dom to iterate through all the routes.

import React, {Component} from "react";
import {Switch} from "react-router-dom";
import Header from "./_frame/Header"
import Main from "./_frame/Main"

// import logo from "./logo.svg";
import "./_frame/Main.styl";

const App = () => {
  return (
    <div>
       <Header />
       <Main />
     </div>
    )
}


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React in the server</h2>
//           </div>
//         </div>
//       );
//   }
// }

export default App;