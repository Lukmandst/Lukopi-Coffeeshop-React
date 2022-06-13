export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_ID_SIZE_TO_CART = "ADD_ID_SIZE_TO_CART";

export const addItemToCart = ({ quantity, delivery, showMiniCart }) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        quantity,
        delivery,
        showMiniCart,
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
      },
    });
  };
};
