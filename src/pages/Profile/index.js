import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
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
        <section className="profile-section">
          <h2>User Profile</h2>

          <div className="profile-box">
            <div className="row profile-wrapper">
              <aside className="col profile-menu">
                <div className="profile-pict">
                </div>
                <h4 className="display-name">
                  {this.state.userData.display_name}
                </h4>
                <p className="email-display">{this.state.userData.email}</p>
                <button className="choose-pict" >
                  Choose photo
                </button>
                <br />
                <button className="remove-pict" >
                  Remove photo
                </button>
                <br />
                <button className="edit-pass" >
                  Edit Password
                </button>
                <p className="save-question">Do you want to save the change?</p>
                <button className="save-chg" >
                  Save Change
                </button>
                <br />
                <button className="cancel" >
                  Cancel
                </button>
                <br />
                <button className="log-out" >
                  Log out
                </button>
              </aside>
              <article className="col profile-details">
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
                        value={this.state.userData.email}
                      />
                      <br />
                      <label htmlFor="d-address">Delivery Adress :</label>
                      <br />
                      <input
                        type="text"
                        id="d-address"
                        value={this.state.userData.delivery_address}
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
                        value={this.state.userData.phone_number}
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
                        value={this.state.userData.display_name}
                      />
                      <br />
                      <label htmlFor="f-name">First name:</label>
                      <br />
                      <input
                        type="text"
                        id="f-name"
                        value={this.state.userData.first_name}
                      />
                      <br />

                      <label htmlFor="l-name">Last name:</label>
                      <br />
                      <input
                        type="text"
                        id="l-name"
                        value={this.state.userData.last_name}
                      />
                      <br />
                    </form>
                  </div>
                  <div className="form-right">
                    <form className="details-form">
                      <label htmlFor="b-day">DD/MM/YY</label>
                      <br />
                      <input
                        type="text"
                        id="b-day"
                        value={this.state.userData.birthdate}
                      />
                      <br />
                    </form>
                  </div>
                </div>

                <form className="gender-form">
                  <input type="radio" id="male" name="gender" value="Male" />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
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
