import{Link} from "react-router-dom"

import "../../pages/SignIn/signIn.css";
import Footer from "../../components/Footer";
import "./signIn.css"

function SignIn() {
  return (
    <div>
      <section className="login container d-inline">
        <div className="row">
          <div className="login-left col-md-6 col-lg-6 d-flex  justify-content-lg-end align-items-lg-end"></div>
          <div className="login-right col-md-6">
            <div className="container home">
              <div className="brand d-flex align-items-center">
                <div>
                  <a href="/" className="brand-logo">
                    <img
                      src="/assets/image/stock/coffee 1.png"
                      alt="LukopiLogo"
                    />
                  </a>
                </div>
                <a href="/">Lukopi</a>
              </div>
              <div>
                <a href="/signUp">
                  <button className="signup">Sign Up</button>
                </a>
              </div>
            </div>
            <div className="col login-form-wrapper">
              <div className="col">
                <div className="header text-center">
                  <h2>Login</h2>
                </div>
                <div className="login-form">
                  <label for="Email" className="form-label">
                    Email address :{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="Enter your email address"
                  />
                  <label for="password" className="form-label">
                    Password :{" "}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                  <a href="/forgot">Forgot password?</a>
                  <button className="signin">Login</button>
                  <button className="signin-google">
                    <img
                      src="/assets/image/stock/google-icon.png"
                      alt="google"
                      className="google-btn"
                    />
                    Login with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card-wrapper d-none d-lg-block">
        <div className="card justify-content-center align-items-center">
          <div className="card-body d-flex list-style-none">
            <ul>
              <li>
                <h4 className="card-title">Get your member card now!</h4>
              </li>
              <li>
                <p className="card-text">
                  Let's join with our member and enjoy the deals.
                </p>
              </li>
            </ul>
            <a href="#" className="btn-create d-flex">
              Create Now
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default SignIn;
