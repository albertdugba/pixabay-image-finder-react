import React from "react";

const ImageResult = props => (
  <div>
    {props.data.map(image => {
      return (
        <div key={image.id}>
          <img src={image.largeImageURL} alt="Pixabay" />
          <p>
            By <strong>{image.user}</strong>
          </p>
        </div>
      );
    })}
  </div>
);

export default ImageResult;
