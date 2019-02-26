import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Zion001 from "./Zion001";
import * as serviceWorker from "./serviceWorker";

const Routes = (
  <BrowserRouter basename="/my-first-react-app">
    <div>
      <Route path="/" component={App} exact={true} />
      <Route path="/zion001" component={Zion001} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(Routes, document.getElementById("root"));

serviceWorker.unregister();
