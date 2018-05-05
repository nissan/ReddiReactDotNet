import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page from "../components/Layout/Page/Page";

const Routes = ({ props }) => (
  <Router>
    <Page/>
  </Router>
);

export default Routes;