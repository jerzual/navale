import * as React from "react";

class Label extends React.Component {
    render() {
        return (<div className="board-label">{this.props.text}</div>);
    }
}

export default Label;