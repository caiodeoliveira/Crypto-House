import * as Effect from "redux-saga/effects";

import { HomeTypes } from "./home/types";

import { getRequestAllCoins } from "./cart/sagas";

export default function* rootSaga(): any {
  const takeLatest: any = Effect.takeLatest;
  return yield Effect.all([
    takeLatest(HomeTypes.GET_REQUEST_ALL_COINS, getRequestAllCoins),
  ]);
}
