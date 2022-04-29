export const enum LoginTypes {
  GET_REQUEST_ALL_COINS = "GET_REQUEST_ALL_COINS",
  GET_REQUEST_ALL_COINS_SUCCESS = "GET_REQUEST_ALL_COINS_SUCCESS",
  GET_REQUEST_ALL_COINS_ERROR = "GET_REQUEST_ALL_COINS_ERROR",

  GET_REQUEST_TRENDING_COINS = "GET_REQUEST_TRENDING_COINS",
  GET_REQUEST_TRENDING_COINS_SUCCESS = "GET_REQUEST_TRENDING_COINS_SUCCESS",
  GET_REQUEST_TRENDING_COINS_ERROR = "GET_REQUEST_TRENDING_COINS_ERROR",
}

export interface LoginState {
  trendingCoins: number[];
  homeLoad: boolean;
}

export interface AllCoinsState {}
