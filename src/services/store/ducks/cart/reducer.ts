import produce from "immer";

import { CartState, CartTypes } from "./types";

const INITIAL_STATE: CartState = {
  totalValue: 0,
  amountValue: 0,
  Cartloading: false,
};

export default function cart(state = INITIAL_STATE, action: any = null) {
  return produce(state, (newState) => {
    switch (action.type) {
      case CartTypes.SUM_TOTAL_VALUE: {
        newState.totalValue = state.totalValue + 1;
        break;
      }
      case CartTypes.SUB_TOTAL_VALUE: {
        newState.totalValue = state.totalValue + 1;
        break;
      }
    }
  });
}
