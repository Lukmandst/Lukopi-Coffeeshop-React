import {  POST_USER_LOGIN } from "../actions/userActions";

const initialState = {
  postUserLoginResult: [],
  postUserLoginToken: false,
  postUserLoginRole: false,
  postUserLoginLoading: false,
  postUserLoginError: false,
};

const SignInReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case POST_USER_LOGIN:
      return {
        ...prevState,
        postUserLoginResult: action.payload.data,
        postUserLoginToken: action.payload.data.token,
        postUserLoginRole: action.payload.data.role,
        postUserLoginLoading: action.payload.loading,
        postUserLoginError: action.payload.errorMessage,
      };
    default:
      return prevState;
  }
};

export default SignInReducer;
