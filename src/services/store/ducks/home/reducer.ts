import produce from "immer";

import { HomeTypes, HomeState } from "./types";

const INITIAL_STATE: HomeState = {
  homeLoad: false,
  allCoins: {
    coins: [],
  },
  newCoins: [],
  isUserLogged: false,
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
      case HomeTypes.CHANGE_TO_ON_SIGN_IN_USER_STATUS:
        return {
          ...newState,
          homeLoad: false,
          isUserLogged: true,
        };
      case HomeTypes.CHANGE_TO_OFF_SIGN_OF_USER_STATUS:
        return {
          ...newState,
          homeLoad: false,
          isUserLogged: false,
        };
      default:
        return newState;
    }
  });
}
