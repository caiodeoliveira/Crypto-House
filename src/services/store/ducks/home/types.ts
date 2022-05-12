export const enum HomeTypes {
  GET_REQUEST_ALL_COINS = "GET_REQUEST_ALL_COINS",
  GET_REQUEST_ALL_COINS_SUCCESS = "GET_REQUEST_ALL_COINS_SUCCESS",
  GET_REQUEST_ALL_COINS_ERROR = "GET_REQUEST_ALL_COINS_ERROR",
}

export interface HomeState {
  allCoins: any[];
  homeLoad: boolean;
}

export interface AllCoinsState {
  name: string;
  symbol: string;
  size: string;
  price: string;
}
