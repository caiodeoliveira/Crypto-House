import produce from "immer";

import { HomeTypes, HomeState } from "./types";

const INITIAL_STATE: HomeState = {
  allCoins: [],
  homeLoad: false,
};

export function home(state = INITIAL_STATE, action: any = null) {
  return produce(state, (newState) => {
    switch (action.type) {
      case HomeTypes.GET_REQUEST_ALL_COINS:
        newState.homeLoad = true;
        break;
      case HomeTypes.GET_REQUEST_ALL_COINS_SUCCESS:
        newState.homeLoad = true;
        break;
      case HomeTypes.GET_REQUEST_ALL_COINS_ERROR:
        newState.homeLoad = true;
        break;
    }
  });
}
