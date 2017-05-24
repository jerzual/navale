import React, { Component } from "react";

import PropTypes from "prop-types";
import Case from "../components/Case";
import { BOARD_SIZE } from "../constants";

class Board extends Component {
  static defaultProps = {
    cols: [],
    rows: []
  };
  static propTypes = {
    cols: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);
    this.state = { cases: {} };
  }
  componentWillMount() {}
  render() {
    return (
      <div
        className="Board"
        style={{
          left: -BOARD_SIZE / 2,
          top: -BOARD_SIZE / 2,
          width: BOARD_SIZE,
          height: BOARD_SIZE,
          marginLeft: window.width / 2,
          marginTop: window.height / 2,
          position: 'absolute',
          border: '1px solid black'
        }}
      >
        {this.props.rows.map((row, y) =>
          this.props.cols.map((col, x) => (
            <Case col={col} row={row} x={x} y={y} />
          ))
        )}
      </div>
    );
  }
}

export default Board;
