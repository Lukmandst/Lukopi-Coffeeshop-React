import {  POST_USER_LOGIN } from "../actions/userActions";

const initialState = {
  postUserLoginResult: [],
  postUserLoginToken: false,
  postUserLoginLoading: false,
  postUserLoginError: false,
};

const SignInReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case POST_USER_LOGIN:
      // console.log("4. masuk reducer", action);
      console.log(typeof action.payload.data.token)
      return {
        ...prevState,
        postUserLoginResult: action.payload.data,
        postUserLoginToken: action.payload.data.token,
        postUserLoginLoading: action.payload.loading,
        postUserLoginError: action.payload.errorMessage,
      };
    default:
      return prevState;
  }
};

export default SignInReducer;
