import { combineReducers } from "redux";
import ProductReducer from "./products";
import UserReducer from "./user";
import SignInReducer from "./signIn";


export default combineReducers({
  ProductReducer,
  UserReducer,
  SignInReducer
});
