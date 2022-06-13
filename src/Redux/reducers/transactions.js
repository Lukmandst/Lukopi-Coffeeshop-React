import {
  ADD_ID_SIZE_TO_CART,
  ADD_TO_CART,
  CREATE_TRANSACTION,
} from "../actions/transactionActions";

const initialState = {
  product_id: false,
  quantity: false,
  size: false,
  delivery: false,
  showMiniCart: false,
  isSuccess: false,
  errorMessage: false,
  data: false,
};

const TransactionsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...prevState,
        quantity: action.payload.quantity,
        delivery: action.payload.delivery,
        showMiniCart: action.payload.showMiniCart,
        errorMessage: action.payload.errorMessage
      };

    case ADD_ID_SIZE_TO_CART:
      return {
        ...prevState,
        product_id: action.payload.productid,
        size: action.payload.size,
        errorMessage: action.payload.errorMessage,
      };

    case CREATE_TRANSACTION:
      return {
        loading: action.payload.loading,
        errorMessage: action.payload.errorMessage,
        isSuccess: action.payload.isSuccess,
        product_id: action.payload.productid,
        quantity: action.payload.quantity,
        size: action.payload.size,
        delivery: action.payload.delivery,
        showMiniCart: action.payload.showMiniCart,
        data: action.payload.data,
      };

    default:
      return prevState;
  }
};

export default TransactionsReducer;
