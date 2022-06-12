import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const getListProducts = () => {
  console.log("2. masuk action");
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:8080/product/all",
      timeout: 3000,
    })
      .then((result) => {
        console.log("3.success:", result.data.data);
        //Success get api
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: {
            loading: false,
            data: result.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3 failed", error);
        //Failed get api
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: {
            loading: false,
            data: [],
            errorMessage: error.response,
          },
        });
      });
  };
};
