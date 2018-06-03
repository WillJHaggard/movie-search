import * as types from "./action-types";

const initialState = {
  viewing: "start",
  feedback: {
    loading: "Loading...",
    error: "Oops, no more information is available.",
    start: "",
  },
  item: {
    Title: "",
    Year: "",
    imdbID: "",
    Type: "movie",
    Poster: "",
    Runtime: "",
  },
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DETAILS["REQUEST"]:
      return {
        ...state,
        item: { ...state.item, ...action.payload.item },
        viewing: "loading",
      };
    case types.DETAILS["SUCCESS"]:
      return {
        ...state,
        item: { ...state.item, ...action.payload.item },
        viewing: "details",
      };
    case types.DETAILS["ERROR"]:
      return {
        ...state,
        item: { ...state.item, ...action.payload.item },
        viewing: action.payload.viewing,
      };
    case types.DETAILS["FAILURE"]:
      return {
        ...state,
        item: { ...state.item, ...action.payload.item },
        viewing: action.payload.viewing,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
