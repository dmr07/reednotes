// import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import React from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter, matchPath} from "react-router-dom";
import routes from "../shared/routes";
import App from "../shared/App";
import favicon from "serve-favicon";
import Html from "../client/Html";
import {Helmet} from "react-helmet";
import sourceMapSupport from "source-map-support";
import {api_properties} from "./routes/api_properties";

import schedule from "node-schedule"
import fetchMLS from "./methods/methods_properties";

const env = (process.env.NODE_ENV === "development") ? "dev" : "prod";

if (env === "dev") {
  sourceMapSupport.install();
}

const app = express();
const helmet = Helmet.renderStatic();

app.use(cors())
app.use(express.static("dist"))

// using __dirname doesn't work.
app.use(favicon("src/client/media/favicon.ico"))

// activating routes
api_properties(app);

app.get("*", (req, res, next) => {
  console.log("+++++++++++++++++++++++++++++++");
  console.log(req.url);

  // test each route in routes with match path
  const activeRoute = routes.find(route => matchPath(req.path, route))
  console.log("ACTIVE ROUTE:", activeRoute);

  const promise = activeRoute.fetchInitialData
    ? activeRoute.requestInitialData(req.path)
    : Promise.resolve()

  promise.then(initialData => {
    const context = { initialData }
    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>);

    if (env === "prod") {
      res.set('Cache-Control', 'public, max-age=3600') // 1hr 
    }

    return res.send(Html(markup, initialData))
  }).catch(next)
})

app.listen(process.env.port || 3000, () => {
  console.log("Server is listening")
})

// exports.app = functions.https.onRequest(app);