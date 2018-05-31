import React, { Component } from "react";

class InputForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref={input => (this.input = input)} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.input.value);
  }
}

export default InputForm;
