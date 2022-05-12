import produce from "immer";

import { LoginTypes, LoginState } from "./types";

const INITIAL_STATE: LoginState = {
  loginLoad: false,
  trendingCoins: {},
};

export function login(state = INITIAL_STATE, action: any = null) {
  return produce(state, (newState) => {
    switch (action.type) {
      case LoginTypes.GET_REQUEST_TRENDING_COINS:
        return {
          ...newState,
          loginLoad: true,
        };
      case LoginTypes.GET_REQUEST_TRENDING_COINS_SUCCESS:
        return {
          ...newState,
          loginLoad: false,
          trendingCoins: action.payload,
        };
      case LoginTypes.GET_REQUEST_TRENDING_COINS_ERROR:
        return {
          ...newState,
          loginLoad: false,
        };
      default:
        return newState;
    }
  });
}
