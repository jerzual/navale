import React, { Component } from "react";
import "./App.css";
import PlayerNameInput from "./components/PlayerNameInput";
import Board from "./containers/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
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
