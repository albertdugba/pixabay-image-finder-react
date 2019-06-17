import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Image from "./Image";
import App from "../App";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/image/:id" component={Image} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
