import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

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
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="textarea"
              placeholder="type something (e.g. this is great!, or this thing sucks!!"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }

  handleSubmit(event) {
    console.log("handleSubmit()");
    console.log(this.input.value);
    event.preventDefault();
    this.props.handleSubmit(this.input.value);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }
}

export default InputForm;
