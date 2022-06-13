import { combineReducers } from "redux";

import ProductReducer from "./products";
import UserReducer from "./user";
import SignInReducer from "./signIn";
import TransactionsReducer from "./transactions";

export default combineReducers({
  ProductReducer,
  UserReducer,
  SignInReducer,
  TransactionsReducer,
});
