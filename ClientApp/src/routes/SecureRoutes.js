import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import Auth from "../services/Auth/Auth";
import history from "./history";
import SecurePage from "../components/Secure/Page/SecurePage";
import Error from "../components/Error";

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const SecureRoutes = props => {
  const log = props.log;
  log.info("using routes/SecureRoutes.js");
  return (
    <Router history={history}>
      <Switch>
      <Route
          exact
          path="/"
          render={props => {
            log.info("Accessing secure route /");
            handleAuthentication(props);
            log.info(`isAuthenticated ${auth.isAuthenticated()}`);
          return (auth.isAuthenticated()?<SecurePage auth={auth} log={log} {...props} />:<SecurePage auth={auth} log={log} {...props} />);
          }}
        />
        <Redirect from='/home' to='/'/>
        <Redirect from='/callback' to='/' />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default SecureRoutes;