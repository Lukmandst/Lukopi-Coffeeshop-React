import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Amazon from "../../../assets/image/stock/amazon.png";
import ArrowBack from "../../../assets/image/vector/eva_arrow-back-fill.svg";
import ArrowNext from "../../../assets/image/vector/eva_arrow-forward-fill.svg";
import Check from "../../../assets/image/vector/check-circle.svg";
import Chicken from "../../../assets/image/product/chicken wings.png";
import Christy from "../../../assets/image/stock/yessica-christy.png";
import Discord from "../../../assets/image/stock/discord.png";
import Footer from "../../../components/Footer";
import Hazel from "../../../assets/image/product/Hazelnutlatte.png";
import JamCheck from "../../../assets/image/vector/jam_check.svg";
import Kimyj from "../../../assets/image/stock/kim-yj.png";
import Map from "../../../assets/image/stock/Huge-Global.png";
import Navbar from "../../../components/Navbar/Navbar";
import Netflix from "../../../assets/image/stock/netflix.png";
import Pinky from "../../../assets/image/product/pinkypromise.png";
import Reddit from "../../../assets/image/stock/reddit.png";
import Robert from "../../../assets/image/stock/viezh-robert.png";
import Spotify from "../../../assets/image/stock/spotify.png";
import Star from "../../../assets/image/stock/star.png";
import Teamwork from "../../../assets/image/stock/team-work.jpg";

import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar page='home'/>
        <header className="hero-image d-flex">
          <div className="container container-hero d-flex">
            <div className="col-hero d-flex d-none d-md-block">
              <h1 className="header-hero">
                Start Your Day with Coffee and Good Meals
              </h1>
              <p className="p-hero">
                We provide high quality beans, good taste, and healthy meals
                made by love just for you. Start your day with us for a bigger
                smile!
              </p>
              <button className="btn-hero">Get Started</button>
            </div>
          </div>
        </header>
        <section className="section-1">
          <div className="container home-1">
            <div className="row">
              <div className="left-col col-lg-6 d-flex">
                <div>
                  <img src={Teamwork} alt="teamwork" />
                </div>
              </div>
              <div className="right-col col-lg-6">
                <h2>We Provide Good Coffee and Healthy Meals</h2>
                <p>
                  You can explore the menu that we provide with fun and have
                  their own taste and make your day better.
                </p>
                <ul>
                  <li>
                    <img src={Check} alt="check-icon" />
                    High quality beans
                  </li>
                  <li>
                    <img src={Check} alt="check-icon" />
                    Healthy meals, you can request the ingredients
                  </li>
                  <li>
                    <img src={Check} alt="check-icon" />
                    Chat with our staff to get better experience for ordering
                  </li>
                  <li>
                    <img src={Check} alt="check-icon" />
                    Free member card with a minimum purchase of IDR 200.000.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-2">
          <div className="container home-2">
            <h2>Here is People's Favorite</h2>
            <p>
              Let's choose and have a bit taste of poeple's favorite. It might
              be yours too!
            </p>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-4 wrapper">
                <div className="img-wrapper">
                  <img src={Hazel} alt="product" className="product" />
                  <p>Hazelnut Latte</p>
                </div>

                <ul>
                  <li>
                    <img src={JamCheck} alt="check" />
                    Hazelnut Syrup
                  </li>
                  <br />
                  <li>
                    <img src={JamCheck} alt="check" />
                    Wanilla Whipped Cream
                  </li>
                  <br />
                  <li>
                    <img src={JamCheck} alt="check" /> Ice / Hot
                  </li>
                  <br />
                  <li>
                    <img src={JamCheck} alt="check" />
                    Sliced Banana on Top
                  </li>
                  <br />
                </ul>
                <div className="order-wrap">
                  <p>IDR 25.000</p>

                  <button className="order-btn">Order Now</button>
                </div>
              </div>
              <div className="col-lg-4 wrapper">
                <div className="img-wrapper">
                  <img src={Pinky} alt="product" className="product" />
                  <p>Pinky Promise</p>
                </div>

                <ul>
                  <li>
                    <img src={JamCheck} alt="check" /> 1 Shot of Coffee
                  </li>
                  <br />
                  <li>
                    <img src={JamCheck} alt="check" />
                    Vanilla Whipped Cream
                  </li>
                  <br />
                  <li>
                    <img src={JamCheck} alt="check" />
                    Chocolate Biscuits
                  </li>
                  <br />
                  <li>
                    <img src={JamCheck} alt="check" />
                    Strawberry Syrup
                  </li>
                  <br />
                  <li>
                    <img src={JamCheck} alt="check" />
                    Sliced strawberry on Top
                  </li>
                  <br />
                </ul>
                <div className="order-wrap">
                  <p>IDR 25.000</p>

                  <button className="order-btn">Order Now</button>
                </div>
              </div>
              <div className="col-lg-4 wrapper">
                <div className="img-wrapper">
                  <img src={Chicken} alt="product" className="product" />
                  <p>Chicken Wings</p>
                </div>

                <ul>
                  <li>
                    <img src={JamCheck} alt="check" />
                    Wings
                  </li>
                  <br />
                  <li>
                    <img src={JamCheck} alt="check" />
                    Drum Sticks
                  </li>
                  <br />
                  <li>
                    <img src={JamCheck} alt="check" />
                    Mayonaise and Lemon
                  </li>
                  <br />
                  <li>
                    <img src={JamCheck} alt="check" /> Hot Fried
                  </li>
                  <br />
                  <li>
                    <img src={JamCheck} alt="check" />
                    Secret Recipe
                  </li>
                  <br />
                  <li>
                    <img src={JamCheck} alt="check" /> Buy 1 Get 1 only for Dine
                    in
                  </li>
                  <br />
                </ul>
                <div className="order-wrap">
                  <p>IDR 25.000</p>

                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-3">
          <div className="container home-3">
            <h2>Visit Our Store in the Spot on the Map Below</h2>
            <p>
              See our store in every city on the spot and spen your good day
              there. See you soon!
            </p>

            <img src={Map} alt="map" className="map" />
          </div>
        </section>

        <section className="section-4">
          <div className="container home-4">
            <h2>Our Partner</h2>
            <div>
              <img src={Netflix} alt="netflix-logo" className="partner-logo" />
              <img src={Reddit} alt="reddit-logo" className="partner-logo" />
              <img src={Amazon} alt="amazon-logo" className="partner-logo" />
              <img src={Discord} alt="discord-logo" className="partner-logo" />
              <img src={Spotify} alt="spotify-logo" className="partner-logo" />
            </div>
          </div>
        </section>

        <section className="section-5">
          <div className="container home-5">
            <div className="row d-flex justify-content-center">
              <h2>Loved by Thousands of Happy Customer</h2>
              <p>
                These are the stories of our customers who have visited us with
                great pleasure.
              </p>
              <div className="row d-flex testi">
                <div className="col-lg-4 testi-wrapper">
                  <div className="user">
                    <img src={Robert} alt="profile" />
                    <p>
                      <span>Viesz Robert</span>
                      Warsaw, Poland
                    </p>
                    <p>
                      4.5 <img src={Star} alt="star" />
                    </p>
                  </div>
                  <p>
                    “Wow... I am very happy to spend my whole day here. the
                    Wi-fi is good, and the coffee and meals tho. I like it
                    here!! Very recommended!
                  </p>
                </div>
                <div className="col-lg-4 testi-wrapper">
                  <div className="user">
                    <img src={Christy} alt="profile" />
                    <p>
                      <span>Yessica Christy</span>
                      Shanxi, China
                    </p>
                    <p>
                      4.5 <img src={Star} alt="star" />
                    </p>
                  </div>
                  <p>
                    "Wow... I am very happy to spend my whole day here. the
                    Wi-fi is good, and the coffee and meals tho. I like it
                    here!! Very recommended!"
                  </p>
                </div>
                <div className="col-lg-4 testi-wrapper">
                  <div className="user">
                    <img src={Kimyj} alt="profile" />
                    <p>
                      <span>Kim Young Jou</span>
                      Seoul, South Korea
                    </p>
                    <p>
                      4.5 <img src={Star} alt="star" />
                    </p>
                  </div>
                  <p>
                    "This is very unusual for my taste, I haven't liked coffee
                    before but their coffee is the best! and yup, you have to
                    order the chicken wings, the best in town!"
                  </p>
                </div>
              </div>
              <div className="row d-flex page-bar mx-auto">
                <div className="col page">
                  <button className="pg1"></button>
                  <button className="pg2"></button>
                  <button className="pg3"></button>
                  <button className="pg4"></button>
                </div>
                <div className="col next-prev">
                  <button className="previous">
                    <img src={ArrowBack} alt="" />
                  </button>
                  <button className="next">
                    <img src={ArrowNext} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
