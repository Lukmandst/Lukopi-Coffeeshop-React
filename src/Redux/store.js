import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "./reducers";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["SignInReducer", "TransactionsReducer"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk, logger))
);
export const persistor = persistStore(store);
