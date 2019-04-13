import React from "react";
import isAuthenticated from "../auth";
import { Route, Redirect } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);
console.log(isAuthenticated());

export default PrivateRoute;