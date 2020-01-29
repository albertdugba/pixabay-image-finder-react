import React, { useEffect, useReducer } from "react";
import axios from "axios";

import SearchForm from "../components/SearchForm";
import Image from "../components/Image";
import { API_KEY } from "../context/keys";
import { reducer, initialState } from "../reducers/reducer";

const Home = () => {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=laptop&image_type=photo&pretty=true`;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(url).then(response => {
      dispatch({
        type: "SEARCH_PHOTOS_SUCCESS",
        payload: response.data.hits
      });
    });
  }, [url]);

  const addSearchQuery = value => {
    dispatch({ type: "SEARCH_PHOTOS_REQUEST" });
    axios
      .get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo&pretty=true`
      )
      .then(jsonResponse => {
        if (jsonResponse.data.Response === true) {
          dispatch({
            type: "SEARCH_PHOTOS_SUCCESS",
            payload: jsonResponse.data.hits
          });
        } else {
          dispatch({
            type: "SEARCH_PHOTOS_FAILURE",
            payload: jsonResponse.Error
          });
        }
      });
  };
  const { photos, loading, errorMessage } = state;
  console.log(photos);

  const loadedImages =
    loading && !errorMessage ? (
      <h1>loading images. Please wait...</h1>
    ) : (
      photos.map((image, index) => <Image key={index} {...image} />)
    );

  return (
    <div>
      <SearchForm search={addSearchQuery} />
      <div className="image-list">{loadedImages}</div>
    </div>
  );
};

export default Home;
