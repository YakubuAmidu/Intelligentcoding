import React from "react";
import App from "./components/App";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/HomeScreen" component={HomeScreen} />
      <Route path="/AboutScreen" component={AboutScreen} />
      <Route path="/ContactScreen" component={ContactScreen} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
