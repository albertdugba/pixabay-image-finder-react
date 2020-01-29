import React from "react";

const Image = ({ comments, largeImageURL }) => {
  return (
    <div>
      <img src={largeImageURL} alt={comments} />
    </div>
  );
};

export default Image;
