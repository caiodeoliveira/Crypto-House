// import { configureStore } from "@reduxjs/toolkit/";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  Store,
  AnyAction,
  compose,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { CartState } from "./ducks/cart/types";

const sagaMiddleware = createSagaMiddleware();

export interface applicationState {
  cart: CartState;
}

const store: Store<unknown, AnyAction> = createStore(
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
