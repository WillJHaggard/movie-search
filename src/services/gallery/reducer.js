import * as types from "./action-types";

const initialState = {
  viewing: "start",
  feedback: {
    loading: "Searching...",
    error: "Oops, try a new search.",
    start: "Search",
  },
  lastQuery: "",
  items: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // sagas
    case types.SEARCH["REQUEST"]:
      return {
        ...state,
        lastQuery: action.payload.lastQuery,
        viewing: action.payload.viewing,
      };
    case types.SEARCH["SUCCESS"]:
      return {
        ...state,
        viewing: action.payload.viewing,
        items: action.payload.items,
      };
    case types.SEARCH["FAILURE"]:
      return {
        ...state,
        viewing: action.payload.viewing,
        items: action.payload.items,
        error: action.payload.error,
      };
    case types.SEARCH["ERROR"]:
      return {
        ...state,
        viewing: action.payload.viewing,
        items: action.payload.items,
      };
    // ephemeral
    case types.CLEAR_RESULTS:
      return {
        ...state,
        viewing: "start",
      };
    case types.SEARCH_CANCEL:
      return { ...state, ...initialState };

    default:
      return state;
  }
};
