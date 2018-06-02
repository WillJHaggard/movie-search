import {
  SELECT_ITEM,
  CANCEL_SEARCH,
  CLEAR_RESULTS,
  REQUEST_SEARCH,
} from "./action-types";

export const selectItem = item => ({
  type: SELECT_ITEM,
  payload: { item },
});

export const cancelSearch = () => ({ type: CANCEL_SEARCH });

export const clearResults = () => ({ type: CLEAR_RESULTS });

export const handleSubmit = (e, query) => {
  e.persist();
  e.preventDefault();
  let encodedQuery = encodeURIComponent(query);
  return {
    type: REQUEST_SEARCH,
    payload: {
      lastQuery: encodedQuery,
      viewing: "loading",
    },
  };
};
