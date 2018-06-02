import { get } from "axios";
import { takeEvery, call, put } from "redux-saga/effects";

import {
  REQUEST_SEARCH,
  RECEIVE_SEARCH,
  ERROR_SEARCH,
} from "./action-types";

function* callRequestSearch({
  payload: { lastQuery: query = "" },
}) {
  try {
    let {
      data: { Response: response, Search: items },
    } = yield call(
      get,
      `https://www.omdbapi.com/?s=${query}&r=json&apikey=9f572b90`
    );
    if (response === "True") {
      yield put({
        type: RECEIVE_SEARCH,
        payload: { items, viewing: "gallery" },
      });
    } else {
      yield put({
        type: RECEIVE_SEARCH,
        payload: { items: [], viewing: "error" },
      });
    }
  } catch (error) {
    yield put({
      type: ERROR_SEARCH,
      payload: { error },
    });
  }
}

export function* requestSearch() {
  yield takeEvery(REQUEST_SEARCH, callRequestSearch);
}
