import React, { Component } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./home.css";
import {Link} from "react-router-dom"

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
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
              <button className="btn-hero">
                Get Started
              </button>
            </div>
          </div>
        </header>
        <section className="section-1">
      <div className="container home-1">
        <div className="row">
          <div className="left-col col-lg-6 d-flex">
            <div>
              <img src="/assets/image/stock/team-work.jpg" alt="teamwork" />
            </div>
          </div>
          <div className="right-col col-lg-6">
            <h2>We Provide Good Coffee and Healthy Meals</h2>
            <p>
              You can explore the menu that we provide with fun and have their
              own taste and make your day better.
            </p>
            <ul>
              <li>
                <img
                  src="/assets/image/vector/check-circle.svg"
                  alt="check-icon"
                />High quality beans
              </li>
              <li>
                <img
                  src="/assets/image/vector/check-circle.svg"
                  alt="check-icon"
                />Healthy meals, you can request the ingredients
              </li>
              <li>
                <img
                  src="/assets/image/vector/check-circle.svg"
                  alt="check-icon"
                />Chat with our staff to get better experience for ordering
              </li>
              <li>
                <img
                  src="/assets/image/vector/check-circle.svg"
                  alt="check-icon"
                />Free member card with a minimum purchase of IDR 200.000.
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
          Let's choose and have a bit taste of poeple's favorite. It might be
          yours too!
        </p>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 wrapper">
            <div className="img-wrapper">
              <img
                src="/assets/image/product/Hazelnutlatte.png"
                alt="product"
                className="product"
              />
              <p>Hazelnut Latte</p>
            </div>

            <ul>
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" />
                Hazelnut Syrup
              </li>
              <br />
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" />
                Wanilla Whipped Cream
              </li>
              <br />
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" /> Ice
                / Hot
              </li>
              <br />
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" />
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
              <img
                src="/assets/image/product/pinkypromise.png"
                alt="product"
                className="product"
              />
              <p>Pinky Promise</p>
            </div>

            <ul>
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" /> 1
                Shot of Coffee
              </li>
              <br />
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" />
                Vanilla Whipped Cream
              </li>
              <br />
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" />
                Chocolate Biscuits
              </li>
              <br />
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" />
                Strawberry Syrup
              </li>
              <br />
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" />
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
              <img
                src="/assets/image/product/chicken wings.png"
                alt="product"
                className="product"
              />
              <p>Chicken Wings</p>
            </div>

            <ul>
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" />
                Wings
              </li>
              <br />
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" />
                Drum Sticks
              </li>
              <br />
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" />
                Mayonaise and Lemon
              </li>
              <br />
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" /> Hot
                Fried
              </li>
              <br />
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" />
                Secret Recipe
              </li>
              <br />
              <li>
                <img src="/assets/image/vector/jam_check.svg" alt="check" /> Buy
                1 Get 1 only for Dine in
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
          See our store in every city on the spot and spen your good day there.
          See you soon!
        </p>

        <img src="/assets/image/stock/Huge-Global.png" alt="map" className="map" />
      </div>
    </section>

    <section className="section-4">
      <div className="container home-4">
        <h2>Our Partner</h2>
        <div>
          <img
            src="/assets/image/stock/netflix.png"
            alt="netflix-logo"
            className="partner-logo"
          />
          <img
            src="/assets/image/stock/reddit.png"
            alt="reddit-logo"
            className="partner-logo"
          />
          <img
            src="/assets/image/stock/amazon.png"
            alt="amazon-logo"
            className="partner-logo"
          />
          <img
            src="/assets/image/stock/discord.png"
            alt="discord-logo"
            className="partner-logo"
          />
          <img
            src="/assets/image/stock/spotify.png"
            alt="spotify-logo"
            className="partner-logo"
          />
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
                <img src="/assets/image/stock/viezh-robert.png" alt="profile" />
                <p>
                  <span>Viesz Robert</span>
                  Warsaw, Poland
                </p>
                <p>4.5 <img src="/assets/image/stock/star.png" alt="star" /></p>
              </div>
              <p>
                “Wow... I am very happy to spend my whole day here. the Wi-fi is
                good, and the coffee and meals tho. I like it here!! Very
                recommended!
              </p>
            </div>
            <div className="col-lg-4 testi-wrapper">
              <div className="user">
                <img
                  src="/assets/image/stock/yessica-christy.png"
                  alt="profile"
                />
                <p>
                  <span>Yessica Christy</span>
                  Shanxi, China
                </p>
                <p>4.5 <img src="/assets/image/stock/star.png" alt="star" /></p>
              </div>
              <p>
                "Wow... I am very happy to spend my whole day here. the Wi-fi is
                good, and the coffee and meals tho. I like it here!! Very
                recommended!"
              </p>
            </div>
            <div className="col-lg-4 testi-wrapper">
              <div className="user">
                <img src="/assets/image/stock/kim-yj.png" alt="profile" />
                <p>
                  <span>Kim Young Jou</span>
                  Seoul, South Korea
                </p>
                <p>4.5 <img src="/assets/image/stock/star.png" alt="star" /></p>
              </div>
              <p>
                "This is very unusual for my taste, I haven't liked coffee
                before but their coffee is the best! and yup, you have to order
                the chicken wings, the best in town!"
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
                <img
                  src="/assets/image/vector/eva_arrow-back-fill.svg"
                  alt=""
                />
              </button>
              <button className="next">
                <img
                  src="/assets/image/vector/eva_arrow-forward-fill.svg"
                  alt=""
                />
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
