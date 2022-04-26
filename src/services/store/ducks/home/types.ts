export const enum HomeTypes {
  GET_REQUEST_ALL_COINS = "GET_REQUEST_ALL_COINS",
  GET_REQUEST_TRENDING_COINS = "GET_REQUEST_TRENDING_COINS",
}

export interface HomeCoinsState {
  allCoins: number[];
  homeCoinsLoad: boolean;
}
