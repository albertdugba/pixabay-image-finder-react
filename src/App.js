import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import ImageDetail from "./components/ImageDetail";
import { Container } from "./styles/GlobalStyles";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/image-detail/:id" component={ImageDetail} />
        </Switch>
      </Container>
    </React.Fragment>
  );
}

export default App;
