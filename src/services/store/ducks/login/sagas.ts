import { call, put } from "redux-saga/effects";
import {
  getRequestTrendingCoinsSuccess,
  getRequestTrendingCoinsError,
} from "./actions";
import api from "../../../api/index";
import { getErrorMessage } from "../../../hooks/getErrorMessage";

export function* getRequestTrendingCoins() {
  const url = `/search/trending`;

  try {
    const { data } = yield call(api.get, url);
    yield put(getRequestTrendingCoinsSuccess(data));
  } catch (error) {
    let errorMessage = getErrorMessage(error);
    yield put(getRequestTrendingCoinsError(errorMessage));
  }
}
