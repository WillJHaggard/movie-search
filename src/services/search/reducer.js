import * as types from "./action-types";

const initialState = {
  viewing: "start",
  feedback: {
    loading: "Searching...",
    error: "Oops, try a new search.",
    start: "Search",
  },
  lastID: "",
  lastQuery: "",
  items: [],
  item: {
    Title: null,
    Year: null,
    imdbID: null,
    Type: "movie",
    Poster: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_RESULTS:
      return {
        ...state,
        viewing: "start",
      };
    case types.REQUEST_SEARCH:
      return {
        ...state,
        lastQuery: action.payload.lastQuery,
        viewing: action.payload.viewing,
      };
    case types.RECEIVE_SEARCH:
      return {
        ...state,
        viewing: action.payload.viewing,
        items: action.payload.items,
      };
    case types.ERROR_SEARCH:
      return state;
    case types.CANCEL_SEARCH:
      return { ...state, ...initialState };
    case types.ERROR_SEARCH:
      return { ...state, viewing: "error" };

    case types.REQUEST_ITEM_DETAILS:
      return {
        ...state,
        item: { ...state.item, ...action.payload.item },
        viewing: "loading",
      };
    case types.RECEIVE_ITEM_DETAILS:
      return {
        ...state,
        item: { ...state.item, ...action.payload.item },
        viewing: "movie",
      };
    case types.ERROR_ITEM_DETAILS:
      return state;

    case types.ESCAPE_ITEM:
      return {
        ...state,
        viewing: "gallery",
        item: { ...state.item, ...initialState.item },
      };
    default:
      return state;
  }
};
