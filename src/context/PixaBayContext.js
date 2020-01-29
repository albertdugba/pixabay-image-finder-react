import React, { useReducer, createContext } from "react";

import { reducer, initialState } from "../reducers/reducer";

export const PhotoContext = createContext();

const PhotoProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PhotoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
