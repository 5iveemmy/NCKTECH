import React from "react";
import "../App.css";
import circle from "../images/circle.png";

function Form() {
  return (
    <form action="" className="card-input">
      <div className="card-group for-margin">
        <label htmlFor="" className="form-labels">
          Credit card number
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="4324 5433 9382 1030"
        />
      </div>
      <div className="card-group">
        <label htmlFor="" className="form-labels">
          Expiration date
        </label>
        <input type="text" class="form-control" placeholder="03/24" />
      </div>
      <div className="card-group for-margin">
        <label htmlFor="" className="form-labels">
          Security code
        </label>
        <input type="text" class="form-control" placeholder="420" />
      </div>
      <div className="card-group">
        <label htmlFor="" className="form-labels">
          Postal Code
        </label>
        <input type="text" class="form-control" placeholder="10119" />
      </div>
      <div className="add">
        <p>
          {" "}
          <span>
            <img src={circle} alt="circle" className="blue-circle" />
          </span>{" "}
          <span className="p-tag">Use this card for next time purchase</span>
        </p>
        <button className="add-card">Add card</button>
      </div>
    </form>
  );
}

export default Form;
