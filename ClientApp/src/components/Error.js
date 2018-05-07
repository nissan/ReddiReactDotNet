import React from "react";
import logo from "../assets/images/logo.svg";
const Error = props => (
  <React.Fragment>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        {props.appName ? props.appName : "Project Primer"} - Error
      </h1>
    </header>
    <div> Sorry, I couldn't find the page you asked for </div>
  </React.Fragment>
);

export default Error;
