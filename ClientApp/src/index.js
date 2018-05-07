import ReactDOM from "react-dom";
/* Comment/uncomment these lines to enable/disable normal routing */
/*******************************************************************/
import React from "react";
import Routes from "./routes/Routes";
/*******************************************************************/
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import {log} from "./services/Log";
import "./index.css";

/* Comment/uncomment these lines to enable/disable using Auth0 vanilla example */
/*******************************************************************/
// import {makeMainRoutes} from "./components/Auth0/routes";
// const routes = makeMainRoutes();
// log.info("Auth0 authenticated routing enabled: (vanilla example)");
// ReactDOM.render(routes, document.getElementById("root"));
/*******************************************************************/

/* Comment/uncomment these lines to enable/disable normal routing */
/*******************************************************************/
log.info("Normal routing enabled");
ReactDOM.render(<Routes log={log} />, document.getElementById("root"));
/*******************************************************************/

registerServiceWorker();
