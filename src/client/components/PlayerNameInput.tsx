import * as React from "react";
import { Component } from "react";

class PlayerNameInput extends Component {
  constructor(props:any) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event:any) {
    this.setState({ value: event.target.value });
  }
  handleSubmit() {}
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="board-label">
        <label for="pseudo">
          <input
            type="text"
            value={this.state.value}
            name="pseudo"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">New Game</button>
      </form>
    );
  }
}

export default PlayerNameInput;
