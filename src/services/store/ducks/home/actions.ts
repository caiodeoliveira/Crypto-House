import { action } from "typesafe-actions";
import { HomeTypes, Coins } from "./types";

export function getRequestAllCoins() {
  return action(HomeTypes.GET_REQUEST_ALL_COINS);
}

export function getRequestAllCoinsSuccess(Coins: Coins) {
  return action(HomeTypes.GET_REQUEST_ALL_COINS_SUCCESS, Coins);
}

export function getRequestAllCoinsError(error: any) {
  return action(HomeTypes.GET_REQUEST_ALL_COINS_ERROR, { error });
}

export function changeToOnSignInUserStatus() {
  return action(HomeTypes.CHANGE_TO_ON_SIGN_IN_USER_STATUS);
}

export function changeToOffSignInUserStatus() {
  return action(HomeTypes.CHANGE_TO_OFF_SIGN_OF_USER_STATUS);
}
