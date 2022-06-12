import { GET_USER_INFO, POST_USER_LOGIN } from "../actions/userActions";

const initialState = {
  getUserResult: [],
  getUserLoading: false,
  getUserError: false,
};

const UserReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...prevState,
        getUserResult: action.payload.data,
        getUserLoading: action.payload.loading,
        getUserError: action.payload.errorMessage,
      };
    default:
      return prevState;
  }
};

export default UserReducer;
