export enum CartTypes {
  GET_REQUEST_ALL_COINS = "GET_REQUEST_ALL_COINS",
  GET_REQUEST_TRENDING_COINS = "GET_REQUEST_TRENDING_COINS",
  SUM_TOTAL_VALUE = "SUM_VALUE",
  SUB_TOTAL_VALUE = "SUB_VALUE",
}

export interface CartState {
  totalValue: number;
  amountValue: number;
  loading: boolean;
}
