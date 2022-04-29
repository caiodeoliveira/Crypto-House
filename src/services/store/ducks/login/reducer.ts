import produce from "immer";

import { LoginTypes, LoginState } from "./types";

const INITIAL_STATE: LoginState = {
  trendingCoins: [],
  homeLoad: false,
};

export function home(state = INITIAL_STATE, action: any = null) {
  return produce(state, (newState) => {
    switch (action.type) {
      case LoginTypes.GET_REQUEST_TRENDING_COINS:
        newState.homeLoad = true;
        break;
      case LoginTypes.GET_REQUEST_TRENDING_COINS_SUCCESS:
        newState.homeLoad = true;
        newState.trendingCoins = action.payload.trendingCoins;
        break;
      case LoginTypes.GET_REQUEST_TRENDING_COINS_ERROR:
        newState.homeLoad = true;
        break;
    }
  });
}
