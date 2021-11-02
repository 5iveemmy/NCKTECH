import React from "react";
import privacy from "./images/privacy.jpg";
import "./App.css";
import { Link } from "react-router-dom";
import Card from "./Payment/Card";
import iconVisa from "./images/icon-pay-02.png";
import master from "./images/icon-pay-03.png";
import paypal from "./images/paypal.png";

function Body() {
  return (
    <div className="body">
      <div className="body-wrap">
        <div className="nav">
          <div className="nav-list">
            <Link className="links">TRIPS</Link>
          </div>
          <div>
            <Link className="links">RECENTLY VIEWED</Link>
          </div>
          <div>
            <Link className="links">BOOKINGS</Link>
          </div>
          <div className="circle">
            <img src={privacy} alt="Cardi-B" />
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
                  <Link>
                    <img src={iconVisa} alt="icon-visa" />
                  </Link>
                  <Link>
                    <img src={master} alt="icon-master" />
                  </Link>
                </div>
                {/* <div className="paypal"> */}
                <Link>
                  <img src={paypal} alt="paypal" className="paypal" />
                </Link>
                {/* </div> */}
              </div>
            </div>
            <div className="payment">
              <Card />
              <form action="" className="card-input">
                <div className="card-group for-margin">
                  <label htmlFor="" className="form-labels">
                    Credit card number
                  </label>
                  <input type="text" class="form-control" />
                </div>
                <div className="card-group">
                  <label htmlFor="" className="form-labels">
                    Expiration date
                  </label>
                  <input type="text" class="form-control" />
                </div>
                <div className="card-group for-margin">
                  <label htmlFor="" className="form-labels">
                    Security code
                  </label>
                  <input type="text" class="form-control" />
                </div>
                <div className="card-group">
                  <label htmlFor="" className="form-labels">
                    Postal Code
                  </label>
                  <input type="text" class="form-control" />
                </div>
              </form>
            </div>
            <h3>Subtotal</h3>
            <h4>Estimated TAX</h4>
            <h5>
              Promotional Code <input type="text" />{" "}
            </h5>
            <button>Complete payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
