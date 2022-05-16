// import { configureStore } from "@reduxjs/toolkit/";
import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { CartState } from "./ducks/cart/types";
import { HomeState } from "./ducks/home/types";
import { LoginState } from "./ducks/login/types";
import { rootReducer } from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSagas";

const sagaMiddleware = createSagaMiddleware();

export interface ApplicationState {
  cart: CartState;
  home: HomeState;
  login: LoginState;
}

const store: Store<unknown, AnyAction> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
