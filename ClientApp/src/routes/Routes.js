import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from "../components/Layout/Page/Page";
import Error from "../components/Error";

export const Routes = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Page} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default Routes;
