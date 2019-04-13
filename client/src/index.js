/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/timeline.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import Timeline from "./components/Timeline";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <PrivateRoute path='/timeline' component={Timeline} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);