import { call, put } from "redux-saga/effects";
import { getRequestAllCoinsSuccess, getRequestAllCoinsError } from "./actions";
import api from "../../../api/index";
import { getErrorMessage } from "../../../hooks/getErrorMessage";

export function* getRequestAllCoins() {
  const url = `/coins/markets?vs_currency=usd`;

  try {
    const { data } = yield call(api.get, url);
    yield put(getRequestAllCoinsSuccess(data));
  } catch (error) {
    let errorMessage = getErrorMessage(error);
    yield put(getRequestAllCoinsError(errorMessage));
  }
}
