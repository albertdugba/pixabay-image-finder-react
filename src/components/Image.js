import React from "react";
import { Link } from "react-router-dom";

import "../App.scss";

const Image = ({ comments, largeImageURL, id }) => {
  return (
    <div className="ImageGrid">
      <Link to={`image-detail/${id}`}>
        <img src={largeImageURL} alt={comments} />
      </Link>
    </div>
  );
};

export default Image;
