import axios from "axios";

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_ID_SIZE_TO_CART = "ADD_ID_SIZE_TO_CART";
export const CREATE_TRANSACTION = "CREATE_TRANSACTION";

export const addItemToCart = ({ quantity, delivery, showMiniCart, productid, size }) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        quantity,
        delivery,
        showMiniCart,
        productid, 
        size,
        errorMessage: false,
        isSuccess: false,
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
  total_price,
}) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_TRANSACTION,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
        isSuccess: false,
      },
    });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_HOST_API}/transaction`,
      headers: { Authorization: `Bearer ${token}` },
      data: { product_id, product_size, quantity, delivery, total_price },
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
            isSuccess: false,
            product_id: false,
            quantity: false,
            size: false,
            delivery: false,
            total_price: false,
            showMiniCart: false,
            showModal: true,
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

export const closeModal = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_MODAL",
      payload: {
        showModal: false,
      },
    });
  };
};

export const resetTransactionState = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET_TRANSACTION",
      payload: {
        loading: false,
        errorMessage: false,
        isSuccess: false,
        product_id: false,
        quantity: false,
        size: false,
        delivery: false,
        showMiniCart: false,
        data: false,
      },
    });
  };
};
