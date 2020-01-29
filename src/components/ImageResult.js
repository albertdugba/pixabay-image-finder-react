import React, { useContext } from "react";
import { PhotoContext } from "../context/PixaBayContext";

const ImageResult = () => {
  const { photos } = useContext(PhotoContext);
  console.log(photos);

  return <p>Image Result Goes Here...</p>;
};

export default ImageResult;
