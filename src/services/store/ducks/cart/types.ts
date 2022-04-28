export enum CartTypes {
  SUM_TOTAL_VALUE = "SUM_VALUE",
  SUB_TOTAL_VALUE = "SUB_VALUE",
}

export interface CartState {
  totalValue: number;
  amountValue: number;
  Cartloading: boolean;
}
