type DataTypes =
  | "rank"
  | "coin"
  | "symbol"
  | "price"
  | "price_change_day"
  | "price_change_week"
  | "market_cap_value"
  | "volume"
  | "circulating_supply";

export interface HomeInnerAreaProps {
  space: DataTypes;
}
