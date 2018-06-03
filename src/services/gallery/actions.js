import { push } from "react-router-redux";
import {
  SEARCH_CANCEL,
  CLEAR_RESULTS,
  SEARCH,
} from "./action-types";

export const cancelSearch = () => ({ type: SEARCH_CANCEL });

export const clearResults = () => ({ type: CLEAR_RESULTS });

export const handleSubmit = (e, query) => {
  e.persist();
  e.preventDefault();
  let encodedQuery = encodeURIComponent(query);
  return {
    type: SEARCH["REQUEST"],
    payload: {
      lastQuery: encodedQuery,
      viewing: "loading",
    },
  };
};
