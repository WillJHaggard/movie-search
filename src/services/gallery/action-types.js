import createRequestTypes from "../../utils/createRequestTypes";

let module = "movie-gallery";

export const SEARCH = createRequestTypes(
  `${module}/SEARCH`
);
export const SEARCH_ERROR = `${module}/SEARCH_ERROR`;
export const SEARCH_CANCEL = `${module}/SEARCH_CANCEL`;
export const CLEAR_RESULTS = `${module}/CLEAR_RESULTS`;
