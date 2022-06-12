import React from "react";
import Mom from "../../../assets/image/stock/mom.png";
import Dad from "../../../assets/image/stock/dad.png";
import Pirate from "../../../assets/image/stock/pirate.png";
function LeftPanel() {
  return (
    <>
      <div className="col left-panel">
        <h3>Promo Today</h3>
        <p className="subpromo">
          Coupons will be updated every weeks. Check them out!
        </p>
        <div className="coupon">
          <button className="coupon-btn mom">
            <img src={Mom} alt="mom" />
            <ul>
              <li className="coupon-title">HAPPY MOTHER'S DAY!</li>
              <li>Get one of our favorite menu for free!</li>
            </ul>
          </button>
          <button className="coupon-btn dad">
            <img src={Dad} alt="dad" />
            <ul>
              <li className="coupon-title">
                Get a cup of coffee for free on sunday morning
              </li>
              <li>Only at 7 to 9 AM</li>
            </ul>
          </button>
          <button className="coupon-btn mom ">
            <img src={Mom} alt="mom" />
            <ul>
              <li className="coupon-title">HAPPY MOTHER'S DAY!</li>
              <li>Get one of our favorite menu for free!</li>
            </ul>
          </button>
          <button className="coupon-btn pirate">
            <img src={Pirate} alt="pirate" />
            <ul>
              <li className="coupon-title">HAPPY HALLOWEEN!</li>
              <li>
                Do you like chicken wings? Get 1 free only if you buy pinky
                promise
              </li>
            </ul>
          </button>
          <button className="apply-btn">Apply Coupon</button>
        </div>
        <ul className="terms-wrapper">
          <span>Terms and Condition</span>
          <li>1. You can only apply 1 coupon per day</li>
          <li>2. It only for dine in</li>
          <li>3. Buy 1 get 1 only for new user</li>
          <li>4. Should make member card to apply coupon</li>
        </ul>
        <button className="add-coupon-admin">Add New Promo</button>
      </div>
    </>
  );
}

export default LeftPanel;
