import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from "../components/Layout/Page/Page";
import Error from "../components/Error";

export const Routes = props => {
  const log = props.log;
  log.info("using routes/Routes.js");
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Page log={log} {...props} />}/>
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default Routes;
