import { combineReducers } from "redux";
import { cart } from "./cart/reducer";
import { home } from "./home/reducer";
import { login } from "./login/reducer";

export const rootReducer = combineReducers({
  cart,
  home,
  login,
});
