const initialState = {
  loading: false,
  photos: [],
  errorMessage: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PHOTOS_REQUEST":
      return { ...state, loading: true, errorMessage: null };

    case "SEARCH_PHOTOS_SUCCESS":
      return { ...state, loading: false, photos: action.payload };

    case "SEARCH_PHOTOS_FAILURE":
      return { ...state, loading: false, errorMessage: action.error };

    default:
      return state;
  }
};
