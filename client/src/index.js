/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import Timeline from "./components/Timeline";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path="/register" component={Register} />
      <div>
        <Header />
        <PrivateRoute path='/timeline' component={Timeline} />
      </div>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);