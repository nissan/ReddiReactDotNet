import React from "react";
import { Router, Route, Link } from "react-router-dom";
import history from './history';
import Page from "../components/Layout/Page/Page";
import Error from "../components/Error";
import {makeMainRoutes} from "../components/Auth0/routes";

export const SecureRoutes = props => {
  return (
    <Router history={history}>
      <React.Fragment>
        <Route exact path="/" component={Page} />
        <Route component={Error} />
      </React.Fragment>
    </Router>
  );
};

export default SecureRoutes;
