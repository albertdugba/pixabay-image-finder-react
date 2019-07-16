import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
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

  // componentDidMount() {
  //   const json = localStorage.getItem("Images");
  //   const images = JSON.parse(json);
  //   this.setState({ image: images });
  // }

  // componentDidUpdate() {
  //   const imgs = JSON.stringify(this.state.image);
  //   localStorage.setItem("Images", imgs);
  // }
  render() {
    const { image, loading } = this.state;

    return (
      <div>
        <h2>Home</h2>
        <div className="single-image">
          {loading ? (
            <p>Loading ...</p>
          ) : (
            image.map(img => (
              <div key={img.id} className="img-layout">
                <img src={img.largeImageURL} alt={img.tags} className="img" />

                <div className="list-group second-column">
                  <h1 className="l-heading">
                    <strong>{img.user} </strong>Image Details
                  </h1>
                  <p className="list-group-item">
                    <FaHeart className="like" />
                    <span>
                      {img.likes
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </p>

                  <p className="list-group-item">
                    <FaEye className="eye" />
                    <span>
                      {img.views
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </p>
                  <p className="list-group-item ">
                    <FaTags className="tags" />
                    <span>{img.tags}</span>
                  </p>
                  <p className="list-group-item">
                    <FaDownload className="download" />
                    <span>
                      {" "}
                      {img.downloads
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </p>
                  <button className="list-group-item btn">
                    {" "}
                    <a href={img.userImageURL} className="arrow">
                      Go to Profile{" "}
                      <FaArrowAltCircleRight className="arrow-right" />
                    </a>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Image;
