import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
// import ZoomIn from "@material-ui/core/Zoom";

import SearchForm from "../components/SearchForm";
import Image from "../components/Image";
import { API_KEY } from "../context/keys";
import { reducer, initialState } from "../reducers/reducer";
import { GlobalStyles } from "../styles/GlobalStyles";

const Home = () => {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=sky&image_type=photo&pretty=true`;
  const [state, dispatch] = useReducer(reducer, initialState);

  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleOpen = img => {
    setOpen(true);
    setCurrentImage(img);
  };
  const handleClose = img => {
    setOpen(false);
    setCurrentImage("");
  };

  useEffect(() => {
    console.log("Current Image:", currentImage);
    axios.get(url).then(response => {
      dispatch({
        type: "SEARCH_PHOTOS_SUCCESS",
        payload: response.data.hits
      });
    });
  }, [url, currentImage]);

  const addSearchQuery = value => {
    dispatch({ type: "SEARCH_PHOTOS_REQUEST" });
    const photoUrl = `https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo&pretty=true`;
    axios
      .get(photoUrl)
      .then(jsonResponse => {
        dispatch({
          type: "SEARCH_PHOTOS_SUCCESS",
          payload: jsonResponse.data.hits
        });
      })
      .then(error => {
        dispatch({
          type: "SEARCH_PHOTOS_FAILURE",
          payload: error
        });
      });
  };
  // const icons = [<Button color="primary">CLose</Button>];
  const { photos, loading, errorMessage } = state;

  const loadedImages =
    loading && !errorMessage ? (
      <p>loading...please wait</p>
    ) : (
      photos.map((image, idx) => <Image key={idx} {...image} />)
    );
  return (
    <div>
      <SearchForm search={addSearchQuery} />
      <Dialog onClose={handleClose} open={open}>
        <DialogContent></DialogContent>
      </Dialog>
      <GlobalStyles onClick={handleOpen}>{loadedImages}</GlobalStyles>
      <img src={currentImage} alt="dewfd" style={{ width: "100%" }} />
    </div>
  );
};

export default Home;
