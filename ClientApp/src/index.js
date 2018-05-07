import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes/Routes";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
