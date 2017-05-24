import React, { Component } from "react";
import "./Case.css";
import { CASE_SIZE } from "../constants";

class Case extends Component {
  state = { color: (this.props.x + this.props.y) % 2 ? "black" : "white" };
  handleClick() {
    this.setState(prevState => {
      return { hit: true };
    });
  }
  render() {
    return (
      <div
        className="Case"
        style={{
          left: this.props.x * CASE_SIZE,
          top: this.props.y * CASE_SIZE,
          border: "1px solid black",
          position: "absolute",
          width: CASE_SIZE + "px",
          height: CASE_SIZE + "px"
        }}
        onClick={this.handleClick.bind(this)}
      />
    );
  }
}

export default Case;
