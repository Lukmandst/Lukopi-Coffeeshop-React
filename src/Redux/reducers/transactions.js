import {
  ADD_ID_SIZE_TO_CART,
  ADD_TO_CART,
} from "../actions/transactionActions";

const initialState = {
  product_id: false,
  quantity: false,
  size: false,
  delivery: false,
  showMiniCart: false,
};

const TransactionsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...prevState,
        quantity: action.payload.quantity,
        delivery: action.payload.delivery,
        showMiniCart: action.payload.showMiniCart,
      };

    case ADD_ID_SIZE_TO_CART:
      return {
        ...prevState,
        product_id: action.payload.productid,
        size: action.payload.size,
      };

    default:
      return prevState;
  }
};

export default TransactionsReducer;
