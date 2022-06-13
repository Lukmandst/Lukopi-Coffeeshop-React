import axios from "axios";

export const GET_USER_INFO = "GET_USER_INFO";
export const POST_USER_LOGIN = "POST_USER_LOGIN";

export const getUserInfo = (token) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_USER_INFO,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });
    //get api
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_HOST_API}/user/info/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      timeout: 3000,
    })
      .then((result) => {
        //success get api
        dispatch({
          type: GET_USER_INFO,
          payload: {
            loading: false,
            data: result.data.data[0],
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error)
        //failed get api
        dispatch({
          type: GET_USER_INFO,
          payload: {
            loading: true,
            data: false,
            errorMessage: error.response,
          },
        });
      });
  };
};

export const postUserLogin = (data) => {
  console.log("2. masuk action");
  return (dispatch) => {
    //loading
    dispatch({
      type: POST_USER_LOGIN,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_HOST_API}/auth/`,
      timeout: 3000,
      data: data,
    })
      .then((result) => {
        console.log("3. success get data");
        //success get api
        dispatch({
          type: POST_USER_LOGIN,
          payload: {
            loading: false,
            data: result.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. failed get data");

        //failed get api
        dispatch({
          type: POST_USER_LOGIN,
          payload: {
            loading: true,
            data: [],
            errorMessage: error.response,
          },
        });
      });
  };
};
