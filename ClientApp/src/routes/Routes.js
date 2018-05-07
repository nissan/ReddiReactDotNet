import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page from "../components/Layout/Page/Page";
import Error from "../components/Error";

export const Routes = props => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Page} />
        <Route component={Error} />
      </React.Fragment>
    </Router>
  );
};

export default Routes;
