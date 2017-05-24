import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "./App.css";
import PlayerNameInput from "./components/PlayerNameInput";
import Board from "./containers/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PlayerNameInput />
        <Board
          cols={["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]}
          rows={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        />
      </div>
    );
  }
}

export default App;
