import * as gallerySagas from "./gallery/sagas";
import * as detailsSagas from "./details/sagas";

// combine all sagas
export default [
  ...Object.values(gallerySagas),
  ...Object.values(detailsSagas),
];
