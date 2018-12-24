import React from "react";
import {Switch,Route} from "react-router-dom"
import routes from "./../routes";

const Main = () => (
  <main>
   <Switch>
      {routes.map((route, i) => <Route key={i} {...route} />)}
    </Switch>
  </main>
)

export default Main