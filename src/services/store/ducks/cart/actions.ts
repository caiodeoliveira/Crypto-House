// import { action } from "typesafe-actions";

import { CartTypes, CartState } from "./types";

export const sumTotalValue = (totalValue: number) => {
  return {
    type: CartTypes.SUM_TOTAL_VALUE,
    payload: {
      totalValue,
    },
  };
};

export const getRequestAllCoins = (page: number) => {
  return {
    type: CartTypes.GET_REQUEST_ALL_COINS,
    payload: { page },
  };
};

export const getRequestAllCoinsSuccess = (
  totalPages: number,
  totalElements: number
) => {
  return {
    type: CartTypes.GET_REQUEST_ALL_COINS,
    payload: {
      totalPages,
      totalElements,
    },
  };
};

export const getRequestAllCoinsError = (error: string) => {
  return {
    type: CartTypes.GET_REQUEST_ALL_COINS,
    payload: {
      error,
    },
  };
};
