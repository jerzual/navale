import * as React from 'react';
import * as ReactDOM from 'react-dom';

import PlayerNameInput from "./components/PlayerNameInput";
import Board from "./containers/Board";
// import logo from './ships.svg';
import './App.scss';

class App extends React.Component {
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
        <canvas id="canvas"></canvas>
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
