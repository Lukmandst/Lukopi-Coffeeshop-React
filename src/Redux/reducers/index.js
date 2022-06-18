import { combineReducers } from "redux";

import ProductReducer from "./products";
import UserReducer from "./user";
import SignInReducer from "./signIn";
import TransactionsReducer from "./transactions";
import ModalReducer from "./modal";

export default combineReducers({
  ProductReducer,
  UserReducer,
  SignInReducer,
  TransactionsReducer,
  ModalReducer,
});
