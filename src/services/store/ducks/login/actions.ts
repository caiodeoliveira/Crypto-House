import { action } from "typesafe-actions";
import { LoginTypes } from "./types";

export function getRequestTrendingCoins() {
  return action(LoginTypes.GET_REQUEST_TRENDING_COINS);
}

export function getRequestTrendingCoinsSuccess(trendingCoins: any) {
  return action(LoginTypes.GET_REQUEST_TRENDING_COINS_SUCCESS, {
    trendingCoins,
  });
}

export function getRequestTrendingCoinsError(error: any) {
  return action(LoginTypes.GET_REQUEST_TRENDING_COINS_ERROR, { error });
}
