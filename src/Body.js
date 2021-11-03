import React from "react";
import privacy from "./images/privacy.jpg";
import "./App.css";
import { Link } from "react-router-dom";
import Card from "./Payment/Card";
import iconVisa from "./images/icon-pay-02.png";
import master from "./images/icon-pay-03.png";
import paypal from "./images/paypal.png";
import Form from "./Payment/Form";
import logo from "./images/logo_sig.png";

function Body() {
  return (
    <div className="body">
      <div className="body-wrap">
        <div className="nav">
          <div className="company">
            <img src={logo} alt="Company logo" />
          </div>
          <div className="test">
            <div className="nav-list">
              <Link className="links" to="/">
                TRIPS
              </Link>
              <Link className="links" to="/">
                RECENTLY VIEWED
              </Link>
              <Link className="links" to="/">
                BOOKINGS
              </Link>
            </div>
            <div className="circle">
              <img src={privacy} alt="Cardi-B" />
            </div>
          </div>
        </div>
        <div className="money">
          <div className="money-wrap">
            <div className="money-head">
              <div className="left">
                <h2>Payment Information</h2>
                <p>Choose your method of payment</p>
              </div>
              <div className="right">
                <div className="pay-cards">
                  <Link to="/">
                    <img src={iconVisa} alt="icon-visa" />
                  </Link>
                  <Link to="/">
                    <img src={master} alt="icon-master" />
                  </Link>
                </div>
                <Link to="/">
                  <img src={paypal} alt="paypal" className="paypal" />
                </Link>
              </div>
            </div>
            <div className="payment">
              <Card />
              <Form />
            </div>
            <div className="total">
              <p>
                {" "}
                <span>Subtotal</span> <span>#2,497.00</span>
              </p>
              <p>
                {" "}
                <span>Estimated TAX</span> <span>#119.64</span>
              </p>
              <p>
                {" "}
                <span>
                  Promotional Code:<span className="faded">Z4KXLM9A</span>
                </span>{" "}
                <span>-60.00</span>
              </p>
            </div>
            <div className="complete">
              <button className="complete-pay">Complete payment</button>
              <p>TOTAL:#2556.64</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
