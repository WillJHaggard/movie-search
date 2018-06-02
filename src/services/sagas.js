import * as searchSagas from "./search/sagas";

// combine all sagas
export default [...Object.values(searchSagas)];
