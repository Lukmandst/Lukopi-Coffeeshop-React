import { SHOW_MODAL, CLOSE_MODAL } from "../actions/modalActions";

const initialState = {
  showModal: false,
};

const ModalReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...prevState,
        showModal: action.payload.showModal,
      };
    case CLOSE_MODAL:
      return {
        ...prevState,
        showModal: action.payload.showModal,
      };
    default:
      return prevState;
  }
};

export default ModalReducer;
