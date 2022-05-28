import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <section className="profile-section">
          <h2>User Profile</h2>

          <div className="profile-box">
            <div className="row profile-wrapper">
              <aside className="col profile-menu">
                <div className="profile-pict"></div>
                <h4 className="display-name">Zulaikha</h4>
                <p className="email-display">zulaikha17@gmail.com</p>
                <button className="choose-pict" href="#">
                  Choose photo
                </button>
                <br />
                <button className="remove-pict" href="#">
                  Remove photo
                </button>
                <br />
                <button className="edit-pass" href="#">
                  Edit Password
                </button>
                <p className="save-question">Do you want to save the change?</p>
                <button className="save-chg" href="#">
                  Save Change
                </button>
                <br />
                <button className="cancel" href="#">
                  Cancel
                </button>
                <br />
                <button className="log-out" href="#">
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
                      <label for="email">Email adress :</label>
                      <br />
                      <input
                        type="email"
                        id="email"
                        value="zulaikha17@gmail.com"
                      />
                      <br />
                      <label for="d-address">Delivery Adress :</label>
                      <br />
                      <input
                        type="text"
                        id="d-address"
                        value="Iskandar Street no. 67 Block A Near Bus Stop"
                      />
                      <br />
                    </form>
                  </div>
                  <div className="form-right">
                    <form className="contact-form">
                      <label for="pNumber">Mobile Number:</label>
                      <br />
                      <input type="tel" id="pNumber" value="(+62)813456782" />
                    </form>
                  </div>
                </div>

                <h3>Details</h3>
                <div className="form-wrapper">
                  <div className="form-left">
                    <form className="details-form">
                      <label for="d-name">Display name:</label>
                      <br />
                      <input type="text" id="d-name" value="Zulaikha" />
                      <br />
                      <label for="f-name">First name:</label>
                      <br />
                      <input type="text" id="f-name" value="Zulaikha" />
                      <br />

                      <label for="l-name">Last name:</label>
                      <br />
                      <input type="text" id="l-name" value="Nirmala" />
                      <br />
                    </form>
                  </div>
                  <div className="form-right">
                    <form className="details-form">
                      <label for="b-day">DD/MM/YY</label>
                      <br />
                      <input type="text" id="b-day" value="03/04/90" />
                      <br />
                    </form>
                  </div>
                </div>

                <form className="gender-form">
                  <input type="radio" id="male" name="gender" value="Male" />
                  <label for="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                  />
                  <label for="female">Female</label>
                </form>
              </article>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default Profile;
