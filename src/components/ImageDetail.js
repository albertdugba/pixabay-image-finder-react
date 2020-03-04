import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageDetail = props => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://pixabay.com/api/?key=12767634-de61c4a8d872248a18dce66ea&id=${props.match.params.id}&image_type=photo&pretty=true`
      )
      .then(response => setImage(response.data.hits))
      .catch(error => console.log(error));
    setLoading(false);
  }, [props]);
  const { downloads } = image;
  console.log(image.likes);
  if (image.length === 0 || image === undefined || loading) {
    return <p>loading...please wait...</p>;
  } else {
    return (
      <div>
        <h1>This is the image of the: {props.match.params.id}</h1>
        <h1>Downloads: {downloads}</h1>
      </div>
    );
  }
};

export default ImageDetail;
