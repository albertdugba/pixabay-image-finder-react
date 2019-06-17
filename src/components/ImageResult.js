import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ImageResult = props => (
  <div className="ImageGrid">
    {props.data.map(image => {
      return (
        <div key={image.id}>
          <div>
            <img src={image.largeImageURL} alt="Pixabay" />
            <p>
              By <strong className="text">{image.user}</strong>
            </p>
            <button className="btn">
              <Link
                to={{
                  pathname: `/image/${image.id}`,

                  state: { image: image.type }
                }}
              >
                View Image
              </Link>
            </button>
          </div>
        </div>
      );
    })}
  </div>
);

export default ImageResult;
