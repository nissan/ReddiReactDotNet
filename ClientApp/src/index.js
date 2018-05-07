import ReactDOM from "react-dom";
/* Comment/uncomment these lines to enable/disable normal routing */
/*******************************************************************/
import React from "react";
import Routes from "./routes/Routes";
/*******************************************************************/
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
/* Comment/uncomment these lines to enable/disable using Auth0 vanilla example */
/*******************************************************************/
// import {makeMainRoutes} from "./components/Auth0/routes";
// const routes = makeMainRoutes();
// ReactDOM.render(routes, document.getElementById("root"));
/*******************************************************************/

/* Comment/uncomment these lines to enable/disable normal routing */
/*******************************************************************/
ReactDOM.render(<Routes />, document.getElementById("root"));
/*******************************************************************/

registerServiceWorker();
