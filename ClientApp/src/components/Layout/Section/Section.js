import React from "react";

const Section = (props) => (
  <section className="App-section">
    <div className="App-intro">Welcome to {props.appName? props.appName : "Project Primer"} DEMO!</div>
  </section>
);

export default Section;
