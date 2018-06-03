import { get } from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { API_KEY } from "../../constants";

import { DETAILS } from "./action-types";

function* callRequestDetails({
  payload: { item: { imdbID: id } },
}) {
  try {
    let {
      data: fullDetailedItem,
      data: { Response: response },
    } = yield call(
      get,
      `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
    );
    if (response === "True") {
      yield put({
        type: DETAILS["SUCCESS"],
        payload: {
          item: fullDetailedItem,
          viewing: "details",
        },
      });
    } else {
      yield put({
        type: DETAILS["ERROR"],
        payload: { item: {}, viewing: "error" },
      });
    }
  } catch (error) {
    yield put({
      type: DETAILS["FAILURE"],
      payload: { item: {}, viewing: "error", error },
    });
  }
}

export function* requestDetails() {
  yield takeEvery(DETAILS["REQUEST"], callRequestDetails);
}
