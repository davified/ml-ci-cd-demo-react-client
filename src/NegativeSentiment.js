import React from "react";
import logo from "./icons/001-thumb-down.svg";

const NegativeSentiment = props => (
  <div className="sentiment-box" id="negative">
    <span role="img" aria-label="negative sentiment">
      negative <img id="sentiment-icon" src={logo} alt="negative sentiment" />
    </span>
  </div>
);

export default NegativeSentiment;
