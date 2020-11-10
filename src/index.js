import React from "react";
import App from "./components/App";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
