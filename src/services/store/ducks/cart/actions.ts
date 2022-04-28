// import { action } from "typesafe-actions";

import { CartTypes } from "./types";

export const sumTotalValue = (totalValue: number) => {
  return {
    type: CartTypes.SUM_TOTAL_VALUE,
    payload: {
      totalValue,
    },
  };
};
