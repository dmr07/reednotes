import React from "react"
import {render, hydrate} from "react-dom"
import {BrowserRouter} from "react-router-dom"
import App from "../shared/App"

const renderMethod = !!module.hot ? render : hydrate;

// hydrate(
renderMethod(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById("root"));