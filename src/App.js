import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
// import ImageResult from "./components/ImageResult";

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
