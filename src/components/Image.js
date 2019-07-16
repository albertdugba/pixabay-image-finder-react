import React, { Component } from "react";
// import { Link } from "react-router-dom";
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
    const { image, loading } = this.state;

    return (
      <div className="single-image">
        {loading ? (
          <p>Loading ...</p>
        ) : (
          image.map(img => (
            <div key={img.id} className="img-layout">
              <img src={img.largeImageURL} alt={img.tags} className="img" />

              <div className="list-group">
                <p className="list-group-item">
                  {img.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
                <p>{img.user}</p>
                <p className="list-group-item">
                  {img.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
                <p className="list-group-item">{img.tags}</p>
                <p className="list-group-item">
                  {img.downloads
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
                <p className="list-group-item">
                  {" "}
                  <a href={img.userImageURL}>Image</a>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Image;
