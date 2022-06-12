import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_COFFEE_PRODUCTS = "GET_COFFEE_PRODUCTS";
export const GET_NONCOFFEE_PRODUCTS = "GET_NONCOFFEE_PRODUCTS";
export const GET_FOODS_PRODUCTS = "GET_FOODS_PRODUCTS";
export const FIND_PRODUCTS = "FIND_PRODUCTS";

export const getListProducts = () => {
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
export const getCoffee = (sort) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_COFFEE_PRODUCTS,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: `http://localhost:8080/product?category=07e88ba9-1a54-46ab-bf2c-3dc8831090a4&sort=${sort}`,
      timeout: 3000,
    })
      .then((result) => {
        //Success get api
        dispatch({
          type: GET_COFFEE_PRODUCTS,
          payload: {
            loading: false,
            data: result.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //Failed get api
        dispatch({
          type: GET_COFFEE_PRODUCTS,
          payload: {
            loading: false,
            data: [],
            errorMessage: error.response,
          },
        });
      });
  };
};
export const getNonCoffe = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_NONCOFFEE_PRODUCTS,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:8080/product?category=30b95dde-a820-41dd-b474-902026e3e755",
      timeout: 3000,
    })
      .then((result) => {
        //Success get api
        dispatch({
          type: GET_NONCOFFEE_PRODUCTS,
          payload: {
            loading: false,
            data: result.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //Failed get api
        dispatch({
          type: GET_NONCOFFEE_PRODUCTS,
          payload: {
            loading: false,
            data: [],
            errorMessage: error.response,
          },
        });
      });
  };
};
export const getFoods = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_FOODS_PRODUCTS,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:8080/product?category=ea71bfcd-f1f1-4976-ae1e-9ff0f2c70d0e",
      timeout: 3000,
    })
      .then((result) => {
        //Success get api
        dispatch({
          type: GET_FOODS_PRODUCTS,
          payload: {
            loading: false,
            data: result.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //Failed get api
        dispatch({
          type: GET_FOODS_PRODUCTS,
          payload: {
            loading: false,
            data: [],
            errorMessage: error.response,
          },
        });
      });
  };
};
export const findFoods = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: FIND_PRODUCTS,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: `http://localhost:8080/product?name=${data}`,
      timeout: 3000,
    })
      .then((result) => {
        //Success get api
        dispatch({
          type: FIND_PRODUCTS,
          payload: {
            loading: false,
            data: result.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //Failed get api
        dispatch({
          type: FIND_PRODUCTS,
          payload: {
            loading: false,
            data: [],
            errorMessage: error.response,
          },
        });
      });
  };
};
