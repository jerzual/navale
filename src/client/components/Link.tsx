import React, { Component } from 'react';

class Link extends Component {
    render() {
        return (<a href="#" onClick={(e => {
            e.preventDefault();
            this.handleClick();
        })}>{this.props.children}</a>);
    }
}

export default Link;