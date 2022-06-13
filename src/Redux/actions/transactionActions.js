import axios from "axios";

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_ID_SIZE_TO_CART = "ADD_ID_SIZE_TO_CART";
export const CREATE_TRANSACTION = "CREATE_TRANSACTION";

export const addItemToCart = ({ quantity, delivery, showMiniCart }) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        quantity,
        delivery,
        showMiniCart,
        errorMessage: false,
      },
    });
  };
};

export const addIdSizeToCart = ({ productid, size }) => {
  return (dispatch) => {
    dispatch({
      type: ADD_ID_SIZE_TO_CART,
      payload: {
        productid,
        size,
        errorMessage: false,
      },
    });
  };
};

export const createNewTransaction = ({
  product_id,
  quantity,
  product_size,
  delivery,
  token,
}) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_TRANSACTION,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_HOST_API}/transaction`,
      headers: { Authorization: `Bearer ${token}` },
      data: { product_id, product_size, quantity, delivery },
      timeout: 3000,
    })
      .then((result) => {
        //success get api
        dispatch({
          type: CREATE_TRANSACTION,
          payload: {
            loading: false,
            data: result.data.data,
            errorMessage: false,
            isSuccess: true,
            product_id: false,
            quantity: false,
            size: false,
            delivery: false,
            showMiniCart: false,
          },
        });
      })
      .catch((error) => {
        //failed get api
        dispatch({
          type: CREATE_TRANSACTION,
          payload: {
            loading: true,
            data: [],
            errorMessage: error.response,
          },
        });
      });
  };
};
