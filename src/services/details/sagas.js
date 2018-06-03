// Extenral Deps
import { get } from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
// Intenral Deps
import { API_KEY } from "../../constants";
import { DETAILS } from "./action-types";

/**
  requestDetails is that which "watches" for callRequestDetails
  where side-effects can be applied for different circumstances

  On each details request this generator function (callRequestDetails):
    1. destructures payload and assigns imdbID to id for shorthand
    2. wraps axios.get in a try catch to use async await
    3. if item.Response is 'True' it yields SUCCESS and passes payload to reducer
    4. if not it yields ERROR which does not yield more information than shallow item
      yielded by services/gallery/sagas
    5. if there is an error it yields FAILURE and reduces the error to state for use
*/

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
