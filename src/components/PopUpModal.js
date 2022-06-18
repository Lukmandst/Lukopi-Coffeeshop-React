import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../Redux/actions/userActions";
import "./CSS/popUpModal.css";

function PopUpModal({
  title = "Lukopi",
  body = "Input Body Message",
  btnMsg1 = "No",
  btnMsg2 = "Yes",
  eventHandlerSec,
  eventHandlerPrim,
}) {
  const { showModal } = useSelector((state) => state.ModalReducer);
  const dispatch = useDispatch();

  const closeHandler=()=>{
    dispatch(closeModal())
  }
  
  return (
    <>
      <Modal show={showModal} onHide={closeHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal">{body}</Modal.Body>
        <Modal.Footer style={{ justifyContent: "space-around" }}>
          <button className="modal-btn-sec" onClick={eventHandlerSec}>
            {btnMsg1}
          </button>
          <button className="modal-btn-primary" onClick={eventHandlerPrim}>
            {btnMsg2}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUpModal;
