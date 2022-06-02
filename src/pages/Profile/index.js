import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      email: "",
      phone_number: "",
      display_name: "",
      first_name: "",
      last_name: "",
      delivery_address: "",
      birthdate: "",
      gender: "",
      isUpdated: false,
    };
  }

  async componentDidMount() {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    console.log(userInfo.token);

    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };
    const url = "http://localhost:8080/user/info/";

    try {
      const result = await axios.get(url, config);
      const userArray = result.data.data[0];
      console.log(userArray);
      this.setState({
        userData: userArray,
        email: userArray.email,
        phone_number: userArray.phone_number,
        display_name: userArray.display_name,
        first_name: userArray.first_name,
        last_name: userArray.last_name,
        delivery_address: userArray.delivery_address,
        birthdate: userArray.birthdate,
        gender: userArray.gender,
      });
    } catch (error) {
      let dataError = error.response.data.err.msg; //many errors in array
      console.log(dataError);
    }
  }

  render() {
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
                    src={`http://localhost:8080${this.state.userData.picture}`}
                    alt="profile"
                  />
                </div>
                <h4 className="display-name">
                  {this.state.display_name}
                </h4>
                <p className="email-display">{this.state.email}</p>
                <button className="choose-pict">Choose photo</button>
                <br />
                <button className="remove-pict">Remove photo</button>
                <br />
                <button className="edit-pass">Edit Password</button>
                <p className="save-question">Do you want to save the change?</p>
                <button
                  className="save-chg"
                  onClick={(e) => {
                    e.preventDefault();
                    const {
                      email,
                      phone_number,
                      display_name,
                      first_name,
                      last_name,
                      delivery_address,
                      birthday,
                      gender,
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
                    };
                    const userInfo = JSON.parse(
                      localStorage.getItem("userinfo")
                    );
                    const config = {
                      headers: { Authorization: `Bearer ${userInfo.token}` },
                    };
                    const url = "http://localhost:8080/user/edit";
                    axios
                      .patch(url, body, config)
                      .then((result) => {
                        console.log(result.data.msg);
                        this.setState({
                          isUpdated: true,
                        });
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  Save Change
                </button>
                <br />
                <button className="cancel">Cancel</button>
                <br />
                <button className="log-out"
                
                onClick={()=>{
                  localStorage.removeItem("userinfo")

                }}
                >Log out</button>
              </aside>
              <article className="col profile-details d-flex">
                <header className="head">
                  <h3>Contacts</h3>
                  <button className="edit-btn">
                    <img src="/assets/image/Vector.svg" alt="" />
                  </button>
                </header>

                <div className="form-wrapper">
                  <div className="form-left">
                    <form className="contact-form">
                      <label htmlFor="email">Email adress :</label>
                      <br />
                      <input
                        type="email"
                        id="email"
                        defaultValue={this.state.email}
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
                        defaultValue={this.state.delivery_address}
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
                        defaultValue={this.state.phone_number}
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
                        defaultValue={this.state.display_name}
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
                        defaultValue={this.state.first_name}
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
                        defaultValue={this.state.last_name}
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
                      <label htmlFor="b-day">DD/MM/YYYY</label>
                      <br />
                      <input
                        type="text"
                        id="b-day"
                        defaultValue={this.state.birthdate}
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
                    defaultValue="Male"
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    defaultValue="Female"
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

export default Profile;
