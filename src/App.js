import React from 'react';
import ReactDOM from 'react-dom';
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
      </div>
    );
  }
}

export default App;
