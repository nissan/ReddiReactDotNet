import React from "react";
import logo from "../../../assets/images/logo.svg";
const Header = props => {
  props.log.info("Header component rendered");
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        Welcome to {props.appName ? props.appName : "Project Primer"}
      </h1>
    </header>
  );
};

export default Header;
