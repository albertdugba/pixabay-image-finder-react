import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import ImageResult from "./components/ImageResult";
import Widget from "./components/Widget";

class App extends Component {
  state = {
    apiURL: "https://pixabay.com/api/?",
    apiKey: "12767634-de61c4a8d872248a18dce66ea",
    loading: false,
    images: [],
    image: null
  };

  onSearchQuery = input => {
    this.setState({ loading: true });
    axios
      .get(
        `${this.state.apiURL}key=${
          this.state.apiKey
        }&q=${input}&image_type=photo`
      )
      .then(data => this.setState({ images: data.data.hits, loading: false }))
      .catch(error => this.setState({ loading: false, error }));
  };

  render() {
    console.log(this.state.images);
    return (
      <div>
        <SearchForm addSearchQuery={this.onSearchQuery} />

        {this.state.loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="page-container">
            {" "}
            <ImageResult
              data={this.state.images}
              // onViewImage={this.getAnImage}
              className="ImageTop"
            />
            <Widget />
          </div>
        )}
      </div>
    );
  }
}

export default App;
