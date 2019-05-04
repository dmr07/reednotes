import React, {Component} from "react";
import {Switch,Route} from "react-router-dom"
import routes from "./../routes";

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
      </main>
    )
  }
}

export default Main