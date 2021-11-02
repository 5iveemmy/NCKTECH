import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="body">
      <div className="body-wrap">
        <div className="head">
          <ul>
            <li>
              <Link>TRIPS</Link>
            </li>
            <li>
              <Link>RECENTLY VIEWED</Link>
            </li>
            <li>
              <Link>BOOKINGS</Link>
            </li>
            {/* <img src="" alt="" /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Body;
