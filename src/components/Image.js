import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Image extends Component {
  state = {
    loading: false,
    image: [],
    apiURL: "https://pixabay.com/api/?key=",
    apiKey: "12767634-de61c4a8d872248a18dce66ea"
  };

  componentDidMount() {
    const { apiURL, apiKey } = this.state;
    this.setState({ loading: true });

    axios
      .get(`${apiURL}${apiKey}&id=${this.props.match.params.id}`)
      .then(data => this.setState({ image: data.data.hits, loading: false }))
      .catch(error => this.setState({ loading: false, error }));
  }

  render() {
    const { image, loading, error } = this.state;

    return (
      <div>
        Go back <Link to="/">Home</Link>
        <h2>Image ID:{this.props.match.params.id}</h2>
        {loading ? (
      <p>Loading ...</p>
    ) : image.map(img => (
          <div key={img.id}>
            <img src={img.largeImageURL} alt={img.tags} />
          </div>
        ))}
      </div>
    );
  }
}

export default Image;
