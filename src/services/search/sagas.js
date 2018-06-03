import { get } from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { API_KEY } from "../../constants";

import {
  REQUEST_SEARCH,
  RECEIVE_SEARCH,
  ERROR_SEARCH,
  REQUEST_ITEM_DETAILS,
  RECEIVE_ITEM_DETAILS,
  ERROR_ITEM_DETAILS,
} from "./action-types";
//  http://www.omdbapi.com/?i=tt3896198&apikey=9f572b90

function* callRequestItemDetails({
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
        type: RECEIVE_ITEM_DETAILS,
        payload: { item: fullDetailedItem },
      });
    } else {
      yield put({
        type: RECEIVE_ITEM_DETAILS,
        payload: { item: {}, viewing: "error" },
      });
    }
  } catch (error) {
    yield put({
      type: ERROR_ITEM_DETAILS,
      payload: { error },
    });
  }
}

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

export function* requestItemDetails() {
  yield takeEvery(
    REQUEST_ITEM_DETAILS,
    callRequestItemDetails
  );
}
