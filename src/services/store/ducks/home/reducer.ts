import produce from "immer";

import { HomeTypes, HomeState } from "./types";

const INITIAL_STATE: HomeState = {
  homeLoad: false,
  allCoins: {
    coins: [],
  },
  newCoins: [],
};

export function home(state = INITIAL_STATE, action: any = null) {
  return produce(state, (newState) => {
    switch (action.type) {
      case HomeTypes.GET_REQUEST_ALL_COINS:
        return {
          ...newState,
          homeLoad: true,
        };
      case HomeTypes.GET_REQUEST_ALL_COINS_SUCCESS:
        return {
          ...newState,
          homeLoad: false,
          allCoins: { coins: action.payload },
          newCoins: action.payload,
        };
      case HomeTypes.GET_REQUEST_ALL_COINS_ERROR:
        return {
          ...newState,
          homeLoad: false,
        };
      default:
        return newState;
    }
  });
}
