import React from "react";
import "../App.css";

const ImageResult = props => (
  <div className="ImageGrid">
    {props.data.map(image => {
      return (
        <div key={image.id}>
          <div>
            <img src={image.largeImageURL} alt="Pixabay" />
            <p>Pixabay</p>
          </div>
        </div>
      );
    })}
  </div>
);

export default ImageResult;
