import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
