import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Rootreducer } from "./reducer/Rootreducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { sagaAll } from "../saga/Rootsaga"

const persistConfig = {
  key: "root",
  whitelist: ["auth"],
  storage,
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

const persistedReducer = persistReducer(persistConfig, Rootreducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);

export let persistor = persistStore(store);

sagaMiddleware.run(sagaAll)