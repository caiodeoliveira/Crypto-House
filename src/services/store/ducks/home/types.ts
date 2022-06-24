export const enum HomeTypes {
  GET_REQUEST_ALL_COINS = "GET_REQUEST_ALL_COINS",
  GET_REQUEST_ALL_COINS_SUCCESS = "GET_REQUEST_ALL_COINS_SUCCESS",
  GET_REQUEST_ALL_COINS_ERROR = "GET_REQUEST_ALL_COINS_ERROR",

  CHANGE_TO_ON_SIGN_IN_USER_STATUS = "CHANGE_USER_STATUS",
  CHANGE_TO_OFF_SIGN_OF_USER_STATUS = "ACTIVE_SIGN_IN_USER_STATUS",
}

export interface HomeState {
  homeLoad: boolean;
  allCoins: {
    coins?: Coins[];
  };
  newCoins?: Coins[];
  isUserLogged: boolean;
}

export interface Coins {
  ath?: number;
  ath_change_percentage?: number;
  ath_date?: string;
  atl?: number;
  atl_change_percentage?: number;
  atl_date?: string;
  circulating_supply?: number;
  current_price?: number;
  fully_diluted_valuation?: number;
  high_24h?: number;
  id?: string;
  image?: string;
  last_updated?: string;
  low_24h?: number;
  market_cap?: number;
  market_cap_change_24h?: number;
  market_cap_change_percentage_24h?: number;
  market_cap_rank?: number;
  max_supply?: number;
  name?: string;
  price_change_percentage_24h?: number;
  price_change_percentage_7d_in_currency?: number;
  roi?: any;
  symbol?: string;
  total_supply?: number;
  total_volume?: number;
}
