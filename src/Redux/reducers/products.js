import {
  FIND_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_COFFEE_PRODUCTS,
  GET_FOODS_PRODUCTS,
  GET_NONCOFFEE_PRODUCTS,
} from "../actions/productActions";

const initialState = {
  getAllProductsResult: [],
  getAllProductsLoading: false,
  getAllProductsError: false,
};

const ProductReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...prevState,
        getAllProductsResult: action.payload.data,
        getAllProductsLoading: action.payload.loading,
        getAllProductsError: action.payload.errorMessage,
      };
    case GET_FOODS_PRODUCTS:
      return {
        ...prevState,
        getAllProductsResult: action.payload.data,
        getAllProductsLoading: action.payload.loading,
        getAllProductsError: action.payload.errorMessage,
      };
    case GET_NONCOFFEE_PRODUCTS:
      return {
        ...prevState,
        getAllProductsResult: action.payload.data,
        getAllProductsLoading: action.payload.loading,
        getAllProductsError: action.payload.errorMessage,
      };
    case GET_COFFEE_PRODUCTS:
    case FIND_PRODUCTS:
      return {
        ...prevState,
        getAllProductsResult: action.payload.data,
        getAllProductsLoading: action.payload.loading,
        getAllProductsError: action.payload.errorMessage,
      };
    default:
      return prevState;
  }
};

export default ProductReducer;
