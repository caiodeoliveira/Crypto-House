import { call, put } from "redux-saga/effects";
import { getRequestAllCoinsSuccess, getRequestAllCoinsError } from "./actions";
import api from "../../../api/index";
import { getErrorMessage } from "../../../hooks/getErrorMessage";

export function* getRequestAllCoins() {
  const url = `/coins/list`;

  try {
    const { data } = yield call(api.get, url);
    yield put(getRequestAllCoinsSuccess(data.data));
  } catch (error) {
    let errorMessage = getErrorMessage(error);
    yield put(getRequestAllCoinsError(errorMessage));
  }
}
