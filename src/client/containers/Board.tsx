import * as React from "react";

import Case from "../components/Case";
import { BOARD_SIZE } from "../Constants";

export interface Props{
    cols:Array<any>;
    rows:Array<any>;
}

class Board extends React.Component<Props, object> {
  static defaultProps: any = {
    cols: [],
    rows: []
  };
  constructor(props: any) {
    super(props);
    this.state = { cases: {} };
  }
  componentWillMount() {

  }
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
