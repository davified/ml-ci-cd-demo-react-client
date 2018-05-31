import React, { Component } from "react";
import { URL } from "./utils";
import InputForm from "./InputForm";
import PositiveSentiment from "./PositiveSentiment";
import NegativeSentiment from "./NegativeSentiment";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sentiment: ""
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Sentiment Classifier</h1>
        <InputForm handleSubmit={this.handleSubmit.bind(this)} />
        {this.state.sentiment === "positive" && <PositiveSentiment />}
        {this.state.sentiment === "negative" && <NegativeSentiment />}
      </div>
    );
  }

  async handleSubmit(userInput) {
    const data = {
      input: userInput
    };
    const response = await fetch(URL, {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      },
      method: "POST"
    });
    const sentiment = await response.json();
    this.setState({ sentiment });
  }

  async componentDidMount() {}
}

export default App;
