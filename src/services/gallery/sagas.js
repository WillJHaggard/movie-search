import { get } from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { API_KEY } from "../../constants";
import { SEARCH } from "./action-types";

function* callRequestSearch({
  payload: { lastQuery: query = "" },
}) {
  try {
    let {
      data: { Response: response, Search: items },
    } = yield call(
      get,
      `https://www.omdbapi.com/?s=${query}&r=json&apikey=${API_KEY}`
    );
    if (response === "True") {
      yield put({
        type: SEARCH["SUCCESS"],
        payload: { items, viewing: "gallery" },
      });
    } else {
      yield put({
        type: SEARCH["ERROR"],
        payload: { items: [], viewing: "error" },
      });
    }
  } catch (error) {
    yield put({
      type: SEARCH["FAILURE"],
      payload: { items: [], viewing: "error", error },
    });
  }
}

export function* requestSearch() {
  yield takeEvery(SEARCH["REQUEST"], callRequestSearch);
}
