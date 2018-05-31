import React, { Component } from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <FormControl
              type="textarea"
              id="form-content"
              value={this.state.value}
              placeholder="e.g. this is great!, or this thing sucks!!"
              onChange={this.handleChange.bind(this)}
            />
            <FormControl.Feedback />
            <Button onClick={this.handleSubmit.bind(this)}>
              Get sentiment prediction
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.input);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }
}

export default InputForm;
