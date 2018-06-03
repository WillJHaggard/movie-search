// Extenral Deps
import { get } from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
// Intenral Deps
import { API_KEY } from "../../constants";
import { SEARCH } from "./action-types";

/**
  requestSearch is that which "watches" for callRequestSearch
  where side-effects can be applied for different circumstances

  On each details request this generator function (callRequestSearch):
    1. destructures payload and assigns lastQuery (snapshot of local state)
        to query for shorthand
    2. wraps axios.get in a try catch to use async await
    3. if item.Response is 'True' it yields SUCCESS and passes payload to reducer
    4. if not it yields ERROR then the request was fine, but the query returned
      zero results so viewing gets reduced to "error" which tells the used based on
      component conditionals
    5. if there is an error it yields FAILURE and reduces the error to state for use
*/

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
