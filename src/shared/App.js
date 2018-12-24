// shared folder. uses a switch from react-router-dom to iterate through all the routes.

import React, {Component} from "react";
import {Switch} from "react-router-dom";
import Header from "./_frame/Header"
import Main from "./_frame/Main"
import Footer from "./_frame/Footer"

// import logo from "./logo.svg";
import "./_frame/Main.styl";

const App = () => {
  return (
    <div>
       <Header />
       <Main />
       <Footer />
     </div>
    )
}

export default App;