import React from "react";
import "../App.css";

const ImageResult = props => (
  <div>
    {props.data.map(image => {
      return (
        <div key={image.id} className="Grid">
          <img src={image.largeImageURL} alt="Pixabay" />
          <p>Pixabay</p>
        </div>
      );
    })}
  </div>
);

export default ImageResult;
