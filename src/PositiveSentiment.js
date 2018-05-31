import React from "react";
import logo from "./icons/003-like.svg";

const PositiveSentiment = props => (
  <div className="sentiment-box" id="positive">
    <span role="img" aria-label="positive sentiment">
      positive <img id="sentiment-icon" src={logo} alt="positive sentiment" />
    </span>
  </div>
);

export default PositiveSentiment;
