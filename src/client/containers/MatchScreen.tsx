import { Component } from 'react';
import * as React from 'react';

export interface Props{
    players: Array<any>;

}
export class MatchScreen extends React.Component {
    render() {
        return (<div className="match-screen"></div>);
    }
}

export default MatchScreen;