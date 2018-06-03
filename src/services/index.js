import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { fork, all } from "redux-saga/effects";
// all sagas
import allSagas from "./sagas";
// individual reducers
import gallery from "./gallery/reducer";
import details from "./details/reducer";

export function* rootSaga() {
  yield all(allSagas.map(fork));
}

export const rootReducer = combineReducers({
  router: routerReducer,
  gallery,
  details,
});
