import { action } from "typesafe-actions";
import { HomeTypes } from "./types";

export function getRequestAllCoins() {
  return action(HomeTypes.GET_REQUEST_ALL_COINS);
}

export function getRequestAllCoinsSuccess() {
  return action(HomeTypes.GET_REQUEST_ALL_COINS_SUCCESS);
}

export function getRequestAllCoinsError(error: any) {
  return action(HomeTypes.GET_REQUEST_ALL_COINS_ERROR, { error });
}
