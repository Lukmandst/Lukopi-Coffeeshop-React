import { POST_USER_LOGIN } from "../actions/userActions";

const initialState = {
  postUserLoginResult: [],
  postUserLoginToken: false,
  postUserLoginRole: false,
  postUserLoginLoading: false,
  postUserLoginError: false,
  isSuccess: false,
  isError: false,
  errormsg: false,
  showModal: false,
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
        isSuccess: action.payload.isSuccess,
        isError: action.payload.isError,
        errormsg: action.payload.errorMessage,
        showModal: action.payload.showModal,
      };
    case "CLOSE_MODAL":
      return {
        ...prevState,
        showModal: false,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        postUserLoginResult: action.payload.data,
        postUserLoginToken: action.payload.data.token,
        postUserLoginRole: action.payload.data.role,
        postUserLoginLoading: action.payload.loading,
        postUserLoginError: action.payload.errorMessage,
        isSuccess: action.payload.isSuccess,
        isError: action.payload.isError,
        errormsg: action.payload.errorMessage,
        showModal: action.payload.showModal,
      };
    default:
      return prevState;
  }
};

export default SignInReducer;
