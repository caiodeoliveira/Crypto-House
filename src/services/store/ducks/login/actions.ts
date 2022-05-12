import { action } from "typesafe-actions";
import { LoginTypes, TrendingCoins } from "./types";

export function getRequestTrendingCoins() {
  return action(LoginTypes.GET_REQUEST_TRENDING_COINS);
}

export function getRequestTrendingCoinsSuccess(trendingCoins: TrendingCoins) {
  return {
    type: LoginTypes.GET_REQUEST_TRENDING_COINS_SUCCESS,
    payload: trendingCoins,
  };
}

export function getRequestTrendingCoinsError(error: any) {
  return action(LoginTypes.GET_REQUEST_TRENDING_COINS_ERROR, { error });
}
