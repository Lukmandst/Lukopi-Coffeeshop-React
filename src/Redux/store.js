import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["SignInReducer"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk, logger),
  )
);
export const persistor = persistStore(store);
