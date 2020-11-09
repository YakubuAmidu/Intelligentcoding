import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Route, Router, Switch } from "react-router-dom";
import CoursesScreen from "./screens/CoursesScreen";
import { createBrowserHistory } from "history";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/CoursesScreen" component={CoursesScreen} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
