export const enum LoginTypes {
  GET_REQUEST_TRENDING_COINS = "GET_REQUEST_TRENDING_COINS",
  GET_REQUEST_TRENDING_COINS_SUCCESS = "GET_REQUEST_TRENDING_COINS_SUCCESS",
  GET_REQUEST_TRENDING_COINS_ERROR = "GET_REQUEST_TRENDING_COINS_ERROR",
}

export interface LoginState {
  loginLoad: boolean;
  trendingCoins: TrendingCoins;
}

export interface TrendingCoins {
  coins?: Coins[];
  exchanges?: [];
}
export interface Coins {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: string;
  };
}
