// shared folder. uses a switch from react-router-dom to iterate through all the routes.

import React, {Component} from "react";
import {Switch} from "react-router-dom";
import Header from "./_frame/Header"
import Main from "./_frame/Main"
// import Footer from "./_frame/Footer"

// import logo from "./logo.svg";
import "./_frame/Main.styl";

const App = () => (
  // constructor(props) {
  //   super(props);

  //   this.state = { 
  //     activeNote: "" 
  //   };
  // }
  // activenotes
  // updateNotesPage(params) {
  //   this.setState({
  //     activeNote: params
  //   })
  // }
  // componentDidMount() {}
  // render() {
    // return (
    <div>
       <Header />
       <Main />
     </div>
)
       // <Footer />

  // }
// }
       // <Header callback={this.updateNotesPage.bind(this)}/>
       // <Main data={this.state.activeNote}/>

export default App;