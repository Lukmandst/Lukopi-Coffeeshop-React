import { GET_ALL_PRODUCTS } from '../actions/productActions';

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
    default:
      return prevState;
  }
};

export default ProductReducer;
