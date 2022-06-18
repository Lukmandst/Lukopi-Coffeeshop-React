export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const showModal = () => {
  return (dispatch) => {
    dispatch({
      type: SHOW_MODAL,
      payload: {
        showModal: true,
      },
    });
  };
};
export const closeModal = () => {
  return (dispatch) => {
    dispatch({
      type: CLOSE_MODAL,
      payload: {
        showModal: false,
      },
    });
  };
};
