import ReactDOM from "react-dom";

/* Comment/uncomment these lines to enable/disable normal routing */
/*******************************************************************/
// import React from "react";
// import Routes from "./routes/Routes";
/*******************************************************************/

/* Comment/uncomment these lines to enable/disable Auth0 secure routing */
/*******************************************************************/
import React from "react";
import SecureRoutes from "./routes/SecureRoutes";
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
// log.info("Normal routing enabled");
// ReactDOM.render(<Routes log={log} />, document.getElementById("root"));
/*******************************************************************/

/* Comment/uncomment these lines to enable/disable using Auth0 custom routing */
/*******************************************************************/
log.info("Auth0 custom routing enabled");
ReactDOM.render(<SecureRoutes log={log} />, document.getElementById("root"));
/*******************************************************************/

registerServiceWorker();