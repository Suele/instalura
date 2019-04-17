/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Timeline from "./components/Timeline";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Fragment>
        <Navbar />
        <PrivateRoute path="/timeline" component={Timeline} />
      </Fragment>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);