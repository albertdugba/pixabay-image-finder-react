import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class ImageResult extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="ImageGrid">
        {data.map(image => {
          return (
            <div key={image.id}>
              <div>
                <img src={image.largeImageURL} alt="Pixabay" />
                <p>
                  By <strong className="text">{image.user}</strong>
                </p>
                <button className="btn">
                  <Link to={`/image/${image.id}`}>View Image</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ImageResult;
