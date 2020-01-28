import React, { useState, useReducer, useEffect, createContext } from "react";
import { reducer } from "../reducers/reducer";

export const PhotoContext = createContext();

const PhotoProvider = props => {
  const [state, dispatch] = useReducer(reducer);
  return (
    <PhotoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
