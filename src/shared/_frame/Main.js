import React, {Component} from "react";
import {Switch,Route} from "react-router-dom"
import routes from "./../routes";
import Footer from "./Footer"
import "./Main.styl";

class Main extends Component {
  componentDidMount() {
    // this.setState
  }
  render() {
    return (
      <main className="content">
       <Switch>
          {routes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
        <Footer />
      </main>
    )
  }
}

export default Main