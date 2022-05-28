import{Link} from "react-router-dom"

import "../../pages/SignIn/signIn.css";
import Footer from "../../components/Footer";

function SignIn() {
  return (
    <div>
      <section class="login container d-inline">
        <div class="row">
          <div class="login-left col-md-6 col-lg-6 d-flex  justify-content-lg-end align-items-lg-end"></div>
          <div class="login-right col-md-6">
            <div class="container home">
              <div class="brand d-flex align-items-center">
                <div>
                  <a href="/" class="brand-logo">
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
                  <button class="signup">Sign Up</button>
                </a>
              </div>
            </div>
            <div class="col login-form-wrapper">
              <div class="col">
                <div class="header text-center">
                  <h2>Login</h2>
                </div>
                <div class="login-form">
                  <label for="Email" class="form-label">
                    Email address :{" "}
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="Email"
                    placeholder="Enter your email address"
                  />
                  <label for="password" class="form-label">
                    Password :{" "}
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                  <a href="/forgot">Forgot password?</a>
                  <button class="signin">Login</button>
                  <button class="signin-google">
                    <img
                      src="/assets/image/stock/google-icon.png"
                      alt="google"
                      class="google-btn"
                    />
                    Login with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="card-wrapper d-none d-lg-block">
        <div class="card justify-content-center align-items-center">
          <div class="card-body d-flex list-style-none">
            <ul>
              <li>
                <h4 class="card-title">Get your member card now!</h4>
              </li>
              <li>
                <p class="card-text">
                  Let's join with our member and enjoy the deals.
                </p>
              </li>
            </ul>
            <a href="#" class="btn-create d-flex">
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
