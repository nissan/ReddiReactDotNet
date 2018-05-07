import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SecureRoutes from "./routes/Routes";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

/* Uncomment these lines to go back to using Auth0 vanilla example */
/*******************************************************************/
// import {makeMainRoutes} from "./components/Auth0/routes";
// const routes = makeMainRoutes();
// ReactDOM.render(routes, document.getElementById("root"));
/*******************************************************************/

ReactDOM.render(<SecureRoutes />, document.getElementById("root"));
registerServiceWorker();
