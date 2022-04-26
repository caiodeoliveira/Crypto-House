import { call, put } from "redux-saga/effects";
import api from "../../../api/index";
import querystring from "querystring";
import { getErrorMessage } from "../../../hooks/getErrorMessage";

import { getRequestAllCoinsSuccess, getRequestAllCoinsError } from "./actions";

export function* getRequestAllCoins(payload: any) {
  const { page } = payload.payload;
  const queryParams = {
    page: page || 0,
    size: 30,
  };

  const qs = `${querystring.stringify(queryParams)}`;
  const url = `${api}?${qs}`;
  try {
    const { data } = yield call(api, url);
    yield put(
      getRequestAllCoinsSuccess(data.data.totalPages, data.data.totalElements)
    );
  } catch (error) {
    getRequestAllCoinsError(payload.error);
  }
}
