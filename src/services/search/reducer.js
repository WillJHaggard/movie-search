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
  item: {},
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
    case types.UPDATE_ITEMS:
      if (action.payload.items) {
        return { ...state, items: action.payload.items };
      }
      return state;
    case types.SELECT_ITEM:
      if (action.payload.item) {
        return {
          ...state,
          viewing: "movie",
          item: action.payload.item,
        };
      }
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
