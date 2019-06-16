import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";

class App extends Component {
  state = {
    apiURL: "https://pixabay.com/api/?",
    apiKey: "12767634-de61c4a8d872248a18dce66ea",
    loading: false,
    images: []
  };
  onSearchQuery = input => {
    console.log(input);
  };
  render() {
    return (
      <div>
        <SearchForm addSearchQuery={this.onSearchQuery} />
      </div>
    );
  }
}

export default App;
