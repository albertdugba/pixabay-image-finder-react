import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import PhotoProvider from "./context/PixaBayContext";

ReactDOM.render(
  <PhotoProvider>
    <Router>
      <App />
    </Router>
  </PhotoProvider>,
  document.getElementById("root")
);
