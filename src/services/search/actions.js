import { push } from "react-router-redux";
import {
  REQUEST_ITEM_DETAILS,
  CANCEL_SEARCH,
  CLEAR_RESULTS,
  REQUEST_SEARCH,
} from "./action-types";

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

export const requestItemDetails = item => ({
  type: REQUEST_ITEM_DETAILS,
  payload: {
    item,
    viewing: "loading",
  },
});
