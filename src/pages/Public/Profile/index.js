import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.userData.email,
      phone_number: this.props.userData.phone_number,
      display_name: this.props.userData.display_name,
      first_name: this.props.userData.first_name,
      last_name: this.props.userData.last_name,
      delivery_address: this.props.userData.delivery_address,
      birthdate: this.props.userData.birthdate,
      gender: this.props.userData.gender,
      photo: this.props.userData.photo,
      isUpdated: false,
      isloggedIn: true,
      showModalLogOut: false,
      showModalEdit: false,
    };
  }

  handleCloseLogOut = () => {
    this.setState({
      showModalLogOut: false,
    });
  };

  handleCloseEdit = () => {
    this.setState({
      showModalEdit: false,
      refresh: true,
    });
  };

  handleImage = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    this.setState({
      photo: e.target.files[0],
    });
  };

  handleUpdate = () => {
    const {
      email,
      phone_number,
      display_name,
      first_name,
      last_name,
      delivery_address,
      birthday,
      gender,
      photo,
    } = this.state;
    const body = {
      email,
      phone_number,
      display_name,
      first_name,
      last_name,
      delivery_address,
      birthday,
      gender,
      photo,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const url = `${process.env.REACT_APP_HOST_API}/user/edit`;
    axios
      .patch(url, body, config)
      .then((result) => {
        // console.log(result.data);
        // console.log(result.data.msg);
        this.setState({
          isUpdated: true,
          showModalEdit: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userData } = this.props;
    const { showModalLogOut, showModalEdit, isloggedIn } = this.state;

    if (isloggedIn === false) {
      return <Navigate to="/signin" />;
    }
    return (
      <div>
        <Navbar />
        <section className="container-fluid profile-section">
          <h2>User Profile</h2>

          <div className="profile-box">
            <div className="row profile-wrapper">
              <aside className="col profile-menu">
                <div className="profile-pict">
                  <img
                    src={`${process.env.REACT_APP_HOST_API}${userData.picture}`}
                    alt="profile"
                  />
                </div>
                <h4 className="display-name">{userData.display_name}</h4>
                <p className="email-display">{userData.email}</p>
                <input
                  className="d-none"
                  type="file"
                  id="upload-button"
                  accept="image/*"
                  onChange={this.handleImage}
                />
                <label className="upload-button" htmlFor="upload-button">
                  Choose photo
                </label>
                {/* <button className="choose-pict">Choose photo</button> */}

                <button className="remove-pict">Remove photo</button>
                <br />
                <button className="edit-pass">Edit Password</button>
                <p className="save-question">Do you want to save the change?</p>
                <button className="save-chg" onClick={this.handleUpdate}>
                  Save Change
                </button>

                <Modal show={showModalEdit} onHide={this.handleCloseEdit}>
                  <Modal.Header closeButton>
                    <Modal.Title>Lukopi-Edit</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Your data has been updated!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleCloseEdit}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>

                <br />
                <button className="cancel">Cancel</button>
                <br />
                <button
                  className="log-out"
                  onClick={() => {
                    this.setState({
                      showModalLogOut: true,
                    });
                  }}
                >
                  Log out
                </button>
                <Modal show={showModalLogOut} onHide={this.handleCloseLogOut}>
                  <Modal.Header closeButton>
                    <Modal.Title>Logout</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you sure you want to logout?</Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={this.handleCloseLogOut}
                    >
                      No
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        localStorage.removeItem("userinfo");
                        this.setState({
                          isloggedIn: false,
                          showModalLogOut: false,
                        });
                      }}
                    >
                      Yes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </aside>
              <article className="col profile-details d-flex">
                <header className="head">
                  <h3>Contacts</h3>
                </header>

                <div className="form-wrapper">
                  <div className="form-left">
                    <form className="contact-form">
                      <label htmlFor="email">Email adress :</label>
                      <br />
                      <input
                        type="email"
                        id="email"
                        defaultValue={userData.email}
                        onChange={(e) =>
                          this.setState({
                            email: e.target.value,
                          })
                        }
                      />
                      <br />
                      <label htmlFor="d-address">Delivery Address :</label>
                      <br />
                      <textarea
                        type="text"
                        id="d-address"
                        rows="2"
                        cols="auto"
                        defaultValue={userData.delivery_address}
                        onChange={(e) =>
                          this.setState({
                            delivery_address: e.target.value,
                          })
                        }
                      />
                      <br />
                    </form>
                  </div>
                  <div className="form-right">
                    <form className="contact-form">
                      <label htmlFor="pNumber">Mobile Number:</label>
                      <br />
                      <input
                        type="tel"
                        id="pNumber"
                        defaultValue={userData.phone_number}
                        onChange={(e) =>
                          this.setState({
                            phone_number: e.target.value,
                          })
                        }
                      />
                    </form>
                  </div>
                </div>

                <h3>Details</h3>
                <div className="form-wrapper">
                  <div className="form-left">
                    <form className="details-form">
                      <label htmlFor="d-name">Display name:</label>
                      <br />
                      <input
                        type="text"
                        id="d-name"
                        defaultValue={userData.display_name}
                        onChange={(e) =>
                          this.setState({
                            display_name: e.target.value,
                          })
                        }
                      />
                      <br />
                      <label htmlFor="f-name">First name:</label>
                      <br />
                      <input
                        type="text"
                        id="f-name"
                        defaultValue={userData.first_name}
                        onChange={(e) =>
                          this.setState({
                            first_name: e.target.value,
                          })
                        }
                      />
                      <br />

                      <label htmlFor="l-name">Last name:</label>
                      <br />
                      <input
                        type="text"
                        id="l-name"
                        defaultValue={userData.last_name}
                        onChange={(e) =>
                          this.setState({
                            last_name: e.target.value,
                          })
                        }
                      />
                      <br />
                    </form>
                  </div>
                  <div className="form-right">
                    <form className="details-form">
                      <label htmlFor="b-day">Birthdate</label>
                      <br />
                      <input
                        type="date"
                        id="b-day"
                        defaultValue={userData.birthdate}
                        onChange={(e) =>
                          this.setState({
                            birthdate: e.target.value,
                          })
                        }
                      />
                      <br />
                    </form>
                  </div>
                </div>

                <form className="gender-form">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    defaultChecked={userData.gender === "Male"}
                    // defaultValue={this.state.gender}
                    value="Male"
                    onChange={(e) => {
                      this.setState({
                        gender: e.target.value,
                      });
                    }}
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    // defaultValue={this.state.gender}
                    defaultChecked={userData.gender === "Female"}
                    value="Female"
                    onChange={(e) => {
                      this.setState({
                        gender: e.target.value,
                      });
                    }}
                  />
                  <label htmlFor="female">Female</label>
                </form>
              </article>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.UserReducer.getUserResult,
    token :state.SignInReducer.postUserLoginToken
  };
};

export default connect(mapStateToProps)(Profile);
