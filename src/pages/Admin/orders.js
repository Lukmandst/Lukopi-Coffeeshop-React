import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PopUpModal from "../../components/PopUpModal";
import { showModal } from "../../Redux/actions/modalActions";

class orders extends Component {
  componentDidMount() {
    document.title = "Lukopi - Orders";
  }
  render() {
    return (
      <>
        <Navbar page="orders" />
        <div className="container">
          <button onClick={this.props.setShow}>orders</button>
        </div>
        <PopUpModal />
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShow: () => {
      dispatch(showModal());
    },
  };
};

export default connect(null, mapDispatchToProps)(orders);
